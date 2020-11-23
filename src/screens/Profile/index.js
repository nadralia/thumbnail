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

const ProfileScreen = () => {
  return (
    <WhiteLayout>
      <Header />
      <View style={styles.container}>
        <Text>Profile screen</Text>
      </View>
    </WhiteLayout>
  );
};

export default ProfileScreen;
