import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main Page!</Text>
    </View>
  );
};

export default Main;