import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import OrderCompletedScreen from '../screens/another/OrderCompletedScreen';

// Screen options
import {HIDDEN_HEADER} from './screenOptions';

// Screen names
import {HOME_SCREEN, ORDER_COMPLETED_SCREEN} from './screenName';

const Stack = createStackNavigator();

const HomeNavigatior = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          // ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={ORDER_COMPLETED_SCREEN}
          component={OrderCompletedScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigatior;
