import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

// import components
import { WhiteLayout } from '../../components/Layouts';

import { Header } from '../../components/Header';
import Category from '../../components/Category';
import Search from '../../components/Search';
import Button from '../../components/Button';

// images
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/img4.jpeg';
import img5 from '../../assets/images/img5.jpeg';

const lists = [
  {
    id: 1,
    text: 'learn to stay motivated',
    image: img1,
    video: 'https://www.youtube.com/embed/-ZZPOXn6_9w',
  },
  {
    id: 2,
    text: 'First step of creating',
    image: img2,
    video: 'https://www.youtube.com/embed/c5-Vex3ufFU',
  },
  {
    id: 3,
    text: 'Learn to prevent fatigue',
    image: img3,
    video: 'https://www.youtube.com/embed/hqKafI7Amd8',
  },
  {
    id: 4,
    text: 'Learn to speak french',
    image: img4,
    video: 'https://www.youtube.com/embed/twSvd5bQLDw',
  },
  {
    id: 5,
    text: 'Learn to cook african food',
    image: img5,
    video: 'https://www.youtube.com/embed/MdZAMSyn_As',
  },
  {
    id: 6,
    text: 'Learn to cook african food',
    image: img1,
    video: 'https://www.youtube.com/embed/LnJwH_PZXnM',
  },
  {
    id: 7,
    text: 'learn to stay motivated',
    image: img1,
    video: 'https://www.youtube.com/embed/chn86sH0O5',
  },
  {
    id: 8,
    text: 'First step of creating',
    image: img2,
    video: 'https://www.youtube.com/embed/U5hpNYeUbK8',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  listBox: {
    height: 80,
    width: 170,
    marginTop: 10,
    borderRadius: 10,
  },
  actionText: {
    marginTop: 50,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 80,
  },
});

const HomeScreen = ({ navigation }) => {
  const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(false);
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  );

  const handleSetIsLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <WhiteLayout>
      <ScrollView>
        <Header onPress={() => navigation.navigate('Home')} />
        <Search clampedScroll={clampedScroll} />
        <Category handleSetIsLoading={handleSetIsLoading} />
        <Button mode="contained" style={{ backgroundColor: '#c98487' }}>
          All Courses
        </Button>
        <View style={styles.listContent}>
          {lists.map((list) => (
            <View key={list.id} style={styles.listBox}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    list,
                  })
                }>
                <View style={styles.actionImage}>
                  <ImageBackground source={list.image} style={styles.image}>
                    <Text style={styles.actionText}>{list.text}</Text>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </WhiteLayout>
  );
};

export default HomeScreen;
