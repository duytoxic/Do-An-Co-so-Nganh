import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

//Component
import BottomTabBar from '../components/navigator/BottomTabBar';

//naivgators
import HomeNavigatior from './HomeNavigator';
import AccountNavigator from './AccountNavigator';

//screens
import ShopScreen from '../screens/product/ShopScreen';
import CartScreen from '../screens/cart/CartScreen';

import {
  MAIN_SCREEN,
  SHOP_SCREEN,
  CART_SCREEN,
  ACCOUNT_NAVIGATOR_SCREEN,
} from './screenName';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const [showTab, setShowTab] = useState(true);

  return (
    <>
      <Tab.Navigator
        sceneContainerStyle={showTab ? styles.wrapper : null}
        screenOptions={{headerShown: false}}
        tabBar={props => (
          <BottomTabBar
            {...props}
            showTab={showTab}
            activeIndex={props.state.index}
          />
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
            label: 'Cửa hàng',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={SHOP_SCREEN}
          component={ShopScreen}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'shoppingcart',
            label: 'Giỏ hàng',
            iconType: 'ant-design',
            iconSize: 23,
          }}
          name={CART_SCREEN}
          component={CartScreen}
        />
        <Tab.Screen
          initialParams={{
            iconName: 'account-outline',
            label: 'Tài khoản',
            iconType: 'material-community',
            iconSize: 25,
          }}
          name={ACCOUNT_NAVIGATOR_SCREEN}
          component={AccountNavigator}
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
