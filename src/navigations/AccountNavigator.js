import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screens

// Screen options
import {HIDDEN_HEADER} from './screenOptions';

import OrderHistoryScreen from '../screens/another/OrderHistoryScreen';
import AccountScreen from '../screens/account/AccountScreen';

// Screen names
import {ORDER_HISTORY_SCREEN, ACCOUNT_SCREEN} from './screenName';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={ACCOUNT_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
        <Stack.Screen
          name={ORDER_HISTORY_SCREEN}
          component={OrderHistoryScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AccountNavigator;
