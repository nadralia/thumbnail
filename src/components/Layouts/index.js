import React from 'react';
import { SafeAreaView } from 'react-native';

export const WhiteLayout = (props) => {
  const { style, children } = props;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', ...style }}>{children}</SafeAreaView>
  );
};
