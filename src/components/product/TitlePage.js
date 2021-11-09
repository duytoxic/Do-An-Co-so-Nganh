import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from '../common/Icon';

import {BLACK_COLOR_1} from '../../theme/colors';

// Define icons
const icons = {
  chevronLeft: {
    type: 'font-awesome',
    name: 'angle-left',
    size: 32,
  },
};

function TitlePage({leftIcon = null, title, rightIcon = null, style}) {
  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.left}>
          {leftIcon && (
            <Icon
              type={leftIcon.type}
              name={leftIcon.name}
              size={leftIcon.size}
              style={styles.iconColor}
            />
          )}
        </View>

        <View style={styles.titlePage}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.right}>
          {rightIcon && (
            <Icon
              type={rightIcon.type}
              name={rightIcon.name}
              size={rightIcon.size}
              style={styles.iconColor}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  titlePage: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: BLACK_COLOR_1,
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconColor: {
    color: BLACK_COLOR_1,
  },
});

export default TitlePage;
