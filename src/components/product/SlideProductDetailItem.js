import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

// Themes
import {WINDOW_WIDTH, BASE} from '../../theme/sizes';
function SlideProductDetailItem({imageSource}) {
  return (
    <>
      <View style={styles.container}>
        <FastImage
          style={styles.illustration}
          source={imageSource}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 170,
  },
  illustration: {
    height: 170,
    width: WINDOW_WIDTH - BASE * 4,
  },
});

export default SlideProductDetailItem;
