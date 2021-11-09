import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

// Themes
import {WINDOW_WIDTH, BASE} from '../../theme/sizes';
import {BLACK_COLOR_1, PRIMARY_COLOR} from '../../theme/colors';
// import {FONT_BOLD, FONT_REGULAR, FONT_WEIGHT_BOLD} from '../theme/typography';
function SlideItem({title, subTitle, imageSource}) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <FastImage
            style={styles.illustration}
            source={imageSource}
            // resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  illustration: {
    height: 115,
    width: WINDOW_WIDTH - BASE * 4,
    borderRadius: 8,
  },
  content: {
    position: 'absolute',
    top: '30%',
    right: '10%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    color: BLACK_COLOR_1,
  },
  subTitle: {
    fontSize: 14,
    color: PRIMARY_COLOR,
    width: 150,
    textAlign: 'center',
  },
});

export default SlideItem;
