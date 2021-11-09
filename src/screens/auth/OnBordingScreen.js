import React from 'react';
import {Text, View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import Button from '../../components/common/Button';

import {PRIMARY_COLOR, WHITE_COLOR, WHITE_COLOR_2} from '../../theme/colors';

import {BASE, MAIN_PADDING} from '../../theme/sizes';
import {LOGIN_SCREEN} from '../../navigations/screenName';

import LogoWhite from '../../components/svg/LogoWhite';

const imageSource = require('../../../assets/images/auth/onbording-bg.png');

import {useNavigation} from '@react-navigation/core';

function OnBordingScreen() {
  const navigation = useNavigation();
  return (
    <>
      {/* <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
      /> */}
      <View style={styles.container}>
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.content}>
            <View style={styles.logo}>
              <LogoWhite />
            </View>
            <Text style={styles.textWelcome}>Welcome {'\n'} to our store</Text>
            <Text style={styles.textDesc}>
              Get your groceries in as fast as one hour
            </Text>

            <Button
              title="Đăng nhập ngay"
              textTransform="uppercase"
              color={PRIMARY_COLOR}
              onPress={() => navigation.navigate(LOGIN_SCREEN)}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: BASE * 2,
    position: 'relative',
  },
  content: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    width: '100%',
    textAlign: 'center',
    marginHorizontal: MAIN_PADDING,
    color: WHITE_COLOR,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textWelcome: {
    color: 'white',
    fontSize: 48,
    lineHeight: 55,
    textAlign: 'center',
    fontWeight: '600',
  },
  textDesc: {
    fontSize: 15,
    color: WHITE_COLOR_2,
    textAlign: 'center',
    marginBottom: BASE * 2,
  },
});

export default OnBordingScreen;
