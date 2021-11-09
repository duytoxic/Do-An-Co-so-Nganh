import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {
  FONT_BOLD,
  FONT_LIGHT,
  FONT_REGULAR,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_REGULAR,
} from '../../theme/typography';

function MyText({
  text,
  style,
  fontSize,
  lineHeight,
  bold = false,
  light = false,
  italic = false,
}) {
  const textFont = bold
    ? styles.textBold
    : light
    ? styles.light
    : styles.textRegular;

  const fontStyle = italic ? styles.textItalic : {};

  return (
    <Text
      style={[
        textFont,
        fontStyle,
        {
          fontSize,
          lineHeight,
        },
        style,
      ]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  // textRegular: {
  //   fontFamily: FONT_REGULAR,
  //   fontWeight: FONT_WEIGHT_REGULAR,
  // },
  // textBold: {
  //   fontFamily: FONT_BOLD,
  //   fontWeight: FONT_WEIGHT_BOLD,
  // },
  // textLight: {
  //   fontFamily: FONT_LIGHT,
  //   fontWeight: FONT_WEIGHT_LIGHT,
  // },
  textItalic: {
    fontStyle: 'italic',
  },
});

export default MyText;
