import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {selectItemInCart} from '../../reducers/cart';

import {MAIN_SCREEN} from '../../navigations/screenName';

import {WHITE_COLOR, BLACK_COLOR_1, PRIMARY_COLOR} from '../../theme/colors';

import BottomTab from './BottomTab';

const {width} = Dimensions.get('screen');

function TabBar({state, navigation, showTab, activeIndex}) {
  // console.log(activeIndex);
  const [selected, setSelected] = useState(MAIN_SCREEN);

  const {routes} = state;
  const listItemInCart = useSelector(selectItemInCart);

  const renderColor = currentTab => {
    return currentTab === selected ? PRIMARY_COLOR : BLACK_COLOR_1;
  };

  const renderBold = currentTab => {
    return currentTab === selected ? '700' : '400';
  };

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  if (state.index === activeIndex) {
  }
  return (
    <>
      {showTab && (
        <View style={styles.wrapper}>
          {routes.map((route, index) => (
            <View key={route.key}>
              <BottomTab
                tab={route}
                onPress={() => handlePress(route.name, index)}
                bold={renderBold(route.name)}
                color={renderColor(route.name)}
              />
              {route.name === 'cart_navigator' && listItemInCart.length ? (
                <View style={styles.tabbarBadge}>
                  <Text style={styles.tabbarBadgeText}>
                    {listItemInCart.length}
                  </Text>
                </View>
              ) : (
                <></>
              )}
            </View>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 60,
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tabbarBadge: {
    position: 'absolute',
    top: 0,
    right: 8,
    backgroundColor: PRIMARY_COLOR,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  tabbarBadgeText: {
    color: WHITE_COLOR,
    fontSize: 12,
    marginBottom: 1,
  },
});

export default TabBar;
