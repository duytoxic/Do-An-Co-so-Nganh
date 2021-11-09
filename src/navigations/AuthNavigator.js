import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screen names
import {
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  ONBORDING_SCREEN,
  LOGIN_SCREEN,
} from './screenName';

// components
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OnBordingScreen from '../screens/auth/OnBordingScreen';

import {HIDDEN_HEADER, BACKGROUND_COLOR} from './screenOptions';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ONBORDING_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          ...BACKGROUND_COLOR,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={ONBORDING_SCREEN} component={OnBordingScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
