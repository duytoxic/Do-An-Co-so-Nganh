import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';

// Screen options
import {HIDDEN_HEADER} from './screenOptions';

// Screen names
import {HOME_SCREEN, PRODUCT_DETAIL} from './screenName';

const Stack = createStackNavigator();

const HomeNavigatior = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          ...HIDDEN_HEADER,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeNavigatior;
