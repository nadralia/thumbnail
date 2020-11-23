import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import components
import { WhiteLayout } from '../../components/Layouts';
import { Header } from '../../components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});

const CourseScreen = () => {
  return (
    <WhiteLayout>
      <Header />
      <View style={styles.container}>
        <Text>Course screen</Text>
      </View>
    </WhiteLayout>
  );
};

export default CourseScreen;
