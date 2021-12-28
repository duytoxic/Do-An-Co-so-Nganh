import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screens

// Screen options
import {HIDDEN_HEADER} from './screenOptions';

import CartScreen from '../screens/cart/CartScreen';
import OrderCompletedScreen from '../screens/another/OrderCompletedScreen';

// Screen names
import {ORDER_COMPLETED_SCREEN, CART_SCREEN} from './screenName';

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={CART_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={CART_SCREEN} component={CartScreen} />
        <Stack.Screen
          name={ORDER_COMPLETED_SCREEN}
          component={OrderCompletedScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default CartNavigator;
