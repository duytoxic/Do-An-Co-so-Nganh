import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BASE, WINDOW_HEIGHT} from '../../theme/sizes';

import Logo from '../svg/Logo';

function AuthBanner({title}) {
  return (
    <>
      <View style={styles.container}>
        <Logo style={styles.logo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: WINDOW_HEIGHT / 4.5,
  },
  logo: {
    height: 30,
    width: 30,
  },
});

export default AuthBanner;
