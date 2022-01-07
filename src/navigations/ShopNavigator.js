import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen options
import {HIDDEN_HEADER} from './screenOptions';

import ShopScreen from '../screens/product/ShopScreen';
import ProductScreen from '../screens/product/ProductScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';

// Screen names
import {SHOP_SCREEN, PRODUCT_DETAIL, PRODUCT_SCREEN} from './screenName';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={SHOP_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          // ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={SHOP_SCREEN} component={ShopScreen} />
        <Stack.Screen name={PRODUCT_SCREEN} component={ProductScreen} />
        <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetailScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ShopNavigator;
