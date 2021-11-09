import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BASE} from '../../theme/sizes';
import {FONT_REGULAR, FONT_WEIGHT_REGULAR} from '../../theme/typographys';
import {GRAY_COLOR_1} from '../../theme/colors';

function Hr({text, style, lineStyle, textStyle}) {
  return (
    <>
      <View style={[styles.container, style]}>
        <View style={[styles.line, lineStyle]} />

        {text && (
          <>
            <Text style={[styles.text, textStyle]}>{text}</Text>
            <View style={[styles.line, lineStyle]} />
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: BASE,
  },
  line: {
    flex: 1,
    height: 1,
    opacity: 0.2,
    backgroundColor: GRAY_COLOR_1,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2B2C43',
    letterSpacing: 0.2,
    fontFamily: FONT_REGULAR,
    marginHorizontal: BASE * 2,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
});

export default Hr;
