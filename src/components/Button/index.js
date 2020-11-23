import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const styles = StyleSheet.create({
  button: {
    marginLeft: 5,
    width: '40%',
    marginBottom: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 26,
  },
});

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[styles.button, mode === 'outlined' && { backgroundColor: '#c98487' }, style]}
    labelStyle={[styles.text, mode === 'contained' && { color: 'black' }]}
    mode={mode}
    {...props}>
    {children}
  </PaperButton>
);

export default memo(Button);
