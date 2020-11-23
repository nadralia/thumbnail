/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TouchableHighlight, Text } from 'react-native';

const styles = {
  buttonStyle: {
    marginLeft: 5,
    paddingTop: 5,
    paddingBottom: 8,
    // marginRight:10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
};

const CategoryButton = ({ onPress, buttonId, pressedButton, children }) => {
  const [pressStatus, setPressStatus] = useState(false);
  const onShowUnderlay = () => {
    setPressStatus(true);
  };
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableHighlight
      style={[
        buttonId === pressedButton
          ? { backgroundColor: '#E74C3C' }
          : { backgroundColor: '#c98487' },
        buttonStyle,
      ]}
      onPress={onPress}
      underlayColor="#2256B0"
      activeOpacity={1}
      onShowUnderlay={onShowUnderlay}>
      <Text style={textStyle}>{children}</Text>
    </TouchableHighlight>
  );
};

export default CategoryButton;
