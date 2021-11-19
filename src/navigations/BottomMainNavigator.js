import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Keyboard, StyleSheet, Text} from 'react-native';

//Component
import BottomTabBar from '../components/navigator/BottomTabBar';
import SafeAreaContainer from '../components/common/SafeAreaContainer';

//naivgators
import HomeNavigatior from './HomeNavigator';

//screens
import ShopScreen from '../screens/product/ShopScreen';
import CartScreen from '../screens/cart/CartScreen';

import {
  MAIN_SCREEN,
  SHOP_SCREEN,
  CART_SCREEN,
  FAVOURITE_SCREEN,
  ACCOUNT_SCREEN,
} from './screenName';

const FavouriteScreen = () => {
  return (
    <>
      <SafeAreaContainer>
        <Text>favourite product screen</Text>
      </SafeAreaContainer>
    </>
  );
};

const AccountScreen = () => {
  return (
    <>
      <SafeAreaContainer>
        <Text>account screen</Text>
      </SafeAreaContainer>
    </>
  );
};
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const [showTab, setShowTab] = useState(true);
  const isHome = true;

  // useEffect(() => {
  //   Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
  //   Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

  //   return () => {
  //     Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
  //     Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
  //   };
  // }, []);

  const _keyboardDidShow = () => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };
  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={showTab ? styles.wrapper : null}
        // tabBarOptions={{keyboardHidesTabBar: false}}
        // tabBarOptions={{headerShown: false}}
        screenOptions={{headerShown: false}}
        tabBar={props => (
          <BottomTabBar {...props} isHome={isHome} showTab={showTab} />
        )}>
        <Tab.Screen
          initialParams={{
            iconName: 'home',
            label: 'Trang chủ',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={MAIN_SCREEN}
          component={HomeNavigatior}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'search1',
            label: 'Shop',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={SHOP_SCREEN}
          component={ShopScreen}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'shoppingcart',
            label: 'Cart',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={CART_SCREEN}
          component={CartScreen}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'hearto',
            label: 'Yêu thích',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={FAVOURITE_SCREEN}
          component={FavouriteScreen}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'account-outline',
            label: 'Tài khoản',
            iconType: 'material-community',
            iconSize: 25,
          }}
          name={ACCOUNT_SCREEN}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 60,
  },
});

export default MainNavigator;
