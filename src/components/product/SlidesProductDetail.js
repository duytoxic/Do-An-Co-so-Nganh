import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, StatusBar, StyleSheet, Dimensions} from 'react-native';

// Components
import SlideProductDetailItem from '../product/SlideProductDetailItem';
import SafeAreaContainer from '../common/SafeAreaContainer';

// Themes
import {WHITE_COLOR, PRIMARY_COLOR} from '../../theme/colors';
import {BASE, MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';

import {useNavigation} from '@react-navigation/core';

const {width} = Dimensions.get('window');

function Slides({slidesData}) {
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
          {slidesData.map((item, idx) => {
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
    // console.log(item.imageMeta.url);
    //Render DEFAULT
    if (item.imageSource) {
      return <SlideProductDetailItem {...item} />;
    }
    return (
      <SlideProductDetailItem
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
          data={slidesData}
          pagingEnabled
          bounces={false}
          onScroll={onScroll}
          decelerationRate={0}
          renderItem={renderItem}
          scrollEventThrottle={16}
          initialNumToRender={slidesData.length}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'WHITE_COLOR',
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
