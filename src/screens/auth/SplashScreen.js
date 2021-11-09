import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';

import {PRIMARY_COLOR, SECONDARY_COLOR} from '../../theme/colors';

import {BASE, MAIN_PADDING} from '../../theme/sizes';
import * as Animatable from 'react-native-animatable';

const image = {uri: 'https://reactjs.org/logo-og.png'};

// Define icons
const icons = {
  user: {
    name: 'email',
    type: 'fontisto',
    size: 22,
  },
};

function SplashScreen() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default SplashScreen;
