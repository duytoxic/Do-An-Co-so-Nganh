import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

import {WINDOW_WIDTH} from '../../theme/sizes';

import Icon from '../common/Icon';
function Tab({color, tab, onPress}) {
  let {label, iconName, iconType, iconSize} = tab.params;
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}>
        <Icon
          name={iconName}
          size={iconSize}
          type={iconType}
          color={color}
          style={!label && styles.iconWithoutLabel}
        />
        <Text style={[styles.text, {color}]}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: (WINDOW_WIDTH - 40) / 5,
    position: 'relative',
  },
  text: {
    fontSize: 13,
  },
  iconWithoutLabel: {
    fontSize: 30,
    width: 35,
    height: 35,
    borderRadius: 18,
    color: WHITE_COLOR,
    backgroundColor: PRIMARY_COLOR,
    padding: 3,
  },
  tabbarBadge: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
  },
});

export default Tab;
