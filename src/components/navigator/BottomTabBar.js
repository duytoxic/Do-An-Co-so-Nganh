import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

import {MAIN_SCREEN} from '../../navigations/screenName';

import {WHITE_COLOR, BLACK_COLOR_1, PRIMARY_COLOR} from '../../theme/colors';

import BottomTab from './BottomTab';

const {width} = Dimensions.get('screen');

function TabBar({state, navigation, showTab}) {
  const [selected, setSelected] = useState(MAIN_SCREEN);

  const {routes} = state;

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
  return (
    <>
      {showTab && (
        <View style={styles.wrapper}>
          {routes.map((route, index) => (
            <BottomTab
              tab={route}
              onPress={() => handlePress(route.name, index)}
              bold={renderBold(route.name)}
              color={renderColor(route.name)}
              key={route.key}
            />
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
});

export default TabBar;
