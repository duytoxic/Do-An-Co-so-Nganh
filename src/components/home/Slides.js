import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, StatusBar, StyleSheet, Dimensions} from 'react-native';

// Components
import SlideItem from './SlideItem';
import SafeAreaContainer from '../common/SafeAreaContainer';

// Themes
import {WHITE_COLOR, PRIMARY_COLOR} from '../../theme/colors';
import {BASE, MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';

import {useNavigation} from '@react-navigation/core';

const DEFAULT_DATA = [
  {
    title: 'Fresh Vegetables',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/intro/intro-image-3.png'),
  },
  {
    title: 'Tiêu đề quảng cáo',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/intro/intro-image-3.png'),
  },
  {
    title: 'Fresh Vegetablesss',
    subTitle: 'Nội dung quảng cáo',
    imageSource: require('../../../assets/images/intro/intro-image-3.png'),
  },
];

const {width} = Dimensions.get('window');

function Slides() {
  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {
      useNativeDriver: false,
    },
  );

  const renderDot = () => {
    const dotPos = Animated.divide(scrollX, width);

    return (
      <>
        <View style={styles.dotContainer}>
          {DEFAULT_DATA.map((item, idx) => {
            const opacity = dotPos.interpolate({
              inputRange: [idx - 1, idx, idx + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            });

            const dotWidth = dotPos.interpolate({
              inputRange: [idx - 1, idx, idx],
              outputRange: [5, 17, 5],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={`dot-${idx}`}
                opacity={opacity}
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                  },
                ]}
              />
            );
          })}
        </View>
      </>
    );
  };

  const renderItem = ({item}) => {
    //Render DEFAULT
    if (item.imageSource) {
      return <SlideItem {...item} />;
    }
    return (
      <SlideItem
        title={item.title}
        subTitle={item.body}
        imageSource={{uri: item.imageMeta.url}}
      />
    );
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />

      <SafeAreaContainer style={styles.container}>
        <Animated.FlatList
          horizontal
          data={DEFAULT_DATA}
          pagingEnabled
          bounces={false}
          onScroll={onScroll}
          decelerationRate={0}
          renderItem={renderItem}
          scrollEventThrottle={16}
          initialNumToRender={DEFAULT_DATA.length}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, idx) => idx.toString()}
        />

        <View style={styles.dotRootContainer}>{renderDot()}</View>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'WHITE_COLOR',
    borderRadius: 8,
  },
  // Dot
  dotRootContainer: {
    position: 'absolute',
    bottom: '15%',
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 15,
    width: 5,
    height: 5,
    marginHorizontal: 2,
  },
});

export default Slides;
