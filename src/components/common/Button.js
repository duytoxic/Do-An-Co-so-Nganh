// @ts-check
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {BASE} from '../../theme/sizes';
import {FONT_REGULAR, FONT_WEIGHT_BOLD} from '../../theme/typographys';
import {WHITE_COLOR} from '../../theme/colors';
import ArrowRightSvg from '../svg/ArrowRightSvg';

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
function Button({
  type,
  color,
  title,
  style,
  onPress,
  textStyle,
  arrowRight,
  textTransform,
  activeOpacity,
  textRight,
}) {
  const btnStyle = {
    borderColor: color,
    borderWidth: type === 'outline' ? 1 : 0,
    backgroundColor: type === 'solid' ? color : 'transparent',
  };

  const txtColor = {
    color: type === 'solid' ? '#fff' : color,
  };
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={[styles.container, btnStyle, style]}>
        <Text
          style={[styles.text, txtColor, {textTransform}, textStyle]}
          numberOfLines={1}>
          {title}
        </Text>
        {arrowRight && (
          <View style={styles.icon}>
            <ArrowRightSvg />
          </View>
        )}
        {textRight && (
          <View style={styles.totalPrice}>
            <Text style={styles.textTotalPrice}>{textRight} đ</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

Button.defaultProps = {
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
    // paddingVertical: BASE * 2,
    // paddingHorizontal: BASE * 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 1,
    alignSelf: 'center',
    fontFamily: FONT_REGULAR,
    fontWeight: FONT_WEIGHT_BOLD,
    color: WHITE_COLOR,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    marginRight: BASE * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalPrice: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#489E67',
    marginRight: BASE * 1.2,
    borderRadius: 4,
    height: 30,
    marginTop: 15,
  },
  textTotalPrice: {
    color: WHITE_COLOR,
    paddingHorizontal: 10,
    fontSize: 12,
  },
});

export default Button;
