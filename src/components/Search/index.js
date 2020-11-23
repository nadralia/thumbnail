import React from 'react';
import { StyleSheet, View, Animated, TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  searchBox: {
    flexDirection: 'row',
  },
  searchIcon: {
    marginTop: 5,
    marginLeft: 10,
    backgroundColor: '#c98487',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    width: 40,
    height: 40,
  },
  icon: {
    marginLeft: 5,
  },
  searchInput: {
    marginLeft: 40,
  },
  formField: {
    backgroundColor: '#c98487',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    fontSize: 18,
    width: 260,
    height: 40,
  },
});

const Search = (props) => {
  const { clampedScroll } = props;
  const searchBarTranslate = clampedScroll.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -250],
    extrapolate: 'clamp',
  });
  const searchBarOpacity = clampedScroll.interpolate({
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.searchIcon}>
          <View style={styles.icon}>
            <Ionicons name="search" size={30} color="white" />
          </View>
        </View>
        <View style={styles.searchInput}>
          <Animated.View
            style={[
              styles.container,
              {
                transform: [
                  {
                    translateY: searchBarTranslate,
                  },
                ],
                opacity: searchBarOpacity,
              },
            ]}>
            <TextInput style={styles.formField} placeholderTextColor="#888888" />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Search;
