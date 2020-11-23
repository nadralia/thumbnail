import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoryButton from '../Button/Category';

const categories = [
  'Career',
  'Happiness',
  'Handle stress',
  'Development',
  'Silent disco',
  'Comedy',
];

const Category = ({ handleSetIsLoading }) => {
  const [pressedButton, setPressedButton] = useState(0);

  const getCategories = (index, category) => {
    handleSetIsLoading(true);
    setPressedButton(index);
  };

  const renderCategories = () => {
    return categories.map((category, index) => (
      <CategoryButton
        onPress={() => getCategories(index, category)}
        buttonId={index}
        pressedButton={pressedButton}
        key={index}>
        <Text>{category}</Text>
      </CategoryButton>
    ));
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        marginBottom: '3%',
        paddingVertical: 4,
        backgroundColor: 'white',
      }}>
      <View style={{ flexDirection: 'row', marginTop: '5%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 5 }}>
          {renderCategories()}
        </ScrollView>
        <View>
          <Ionicons name="chevron-forward" size={30} color="#dca897" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;
