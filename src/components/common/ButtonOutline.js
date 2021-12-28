// @ts-check
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {BASE} from '../../theme/sizes';
import {FONT_REGULAR, FONT_WEIGHT_BOLD} from '../../theme/typographys';
import {GRAY_COLOR_2, PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';
import ArrowRightSvg from '../svg/ArrowRightSvg';
import Icon from './Icon';

/**
 * Button
 * @typedef Props
 * @property {string} color
 * @property {string} title
 * @property {boolean} arrowRight
 * @property {() => void} onPress
 * @property {number} activeOpacity
 * @property {'solid' | 'clear' | 'outline'} type
 * @property {'capitalize' | 'lowercase'| 'uppercase' | 'none' } textTransform
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} style
 * @property {import('react-native').StyleProp<import('react-native').TextStyle>} textStyle
 * @param {Props} props
 * @property {boolean} compRight
 * @property {Props} textRight
 */
function ButtonOutline({
  type,
  color,
  title,
  style,
  onPress,
  textStyle,
  textTransform,
  activeOpacity,
  iconLeft,
}) {
  // const btnStyle = {
  //   borderColor: color,
  //   borderWidth: type === 'outline' ? 1 : 0,
  //   backgroundColor: type === 'solid' ? color : 'transparent',
  // };

  // const txtColor = {
  //   color: type === 'solid' ? '#fff' : color,
  // };
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={[styles.container, style]}>
        {iconLeft && (
          <View style={styles.iconContainer}>
            <Icon {...iconLeft} style={styles.icon} />
          </View>
        )}
        <Text
          style={[styles.text, {textTransform}, textStyle]}
          numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}

ButtonOutline.defaultProps = {
  type: 'solid',
  color: '#219653',
  arrowRight: false,
  activeOpacity: 0.7,
  textTransform: 'none',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 19,
    marginVertical: BASE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: GRAY_COLOR_2,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 1,
    alignSelf: 'center',
    fontFamily: FONT_REGULAR,
    fontWeight: FONT_WEIGHT_BOLD,
    color: PRIMARY_COLOR,
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    marginLeft: BASE * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: PRIMARY_COLOR,
  },
});

export default ButtonOutline;
