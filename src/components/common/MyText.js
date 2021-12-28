import React from 'react';
import {StyleSheet, Text} from 'react-native';

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
  textItalic: {
    fontStyle: 'italic',
  },
});

export default MyText;
