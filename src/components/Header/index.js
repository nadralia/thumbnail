import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import logo images
import logoIcon from '../../assets/images/logo.png';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dca897',
    height: hp('12%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
  responsiveBox: {
    flexDirection: 'row',
  },
  arrowBox: {
    marginTop: 5,
  },
  logoBox: {
    marginLeft: 60,
  },
  settingBox: {
    marginTop: 5,
  },
  logoImage: {
    height: 60,
    width: 60,
  },
});

export const Header = ({ onPress, checkBox }) => {
  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <View style={styles.arrowBox}>
          <TouchableOpacity onPress={onPress}>
            <Ionicons name="chevron-back" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.logoBox}>
          <Image source={logoIcon} style={styles.logoImage} />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 160 }}>
          <View style={styles.settingBox}>
            <Ionicons name="settings" size={30} color="black" />
          </View>
          {checkBox ? (
            <View style={styles.settingBox}>
              <Ionicons name="checkbox" size={30} color="black" />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
