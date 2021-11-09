import React from 'react';
import {StatusBar} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

// navigators
import {navigationRef} from './navigationServices';
import {AuthProvider} from '../context/AuthContext';
import Routes from './Routes';

function Navigation() {
  const theme = 'light';
  const barStyle = `${theme === 'dark' ? 'light-content' : 'dark-content'}`;
  const baseTheme = theme === 'light' ? DefaultTheme : DarkTheme;
  const myTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
    dark: true,
  };
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef} theme={myTheme}>
            <StatusBar
              barStyle={barStyle}
              translucent={true}
              backgroundColor={'transparent'}
            />
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
}

export default Navigation;
