/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import Navigation from './src/navigations';

import {colors} from './src/global/styles';

const App = () => {
  return (
    <>
      <Navigation />
      {/* <SignInScreen /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
