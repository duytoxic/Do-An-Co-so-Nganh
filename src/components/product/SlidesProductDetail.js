import React, {useRef} from 'react';
import {View, Animated, StatusBar, StyleSheet, Dimensions} from 'react-native';

// Components
import SlideProductDetailItem from '../product/SlideProductDetailItem';
import SafeAreaContainer from '../common/SafeAreaContainer';

// Themes
import {PRIMARY_COLOR} from '../../theme/colors';

const {width} = Dimensions.get('window');

function Slides({slidesData}) {
  let listSlide = [];

  for (let i = 0; i < 3; i++) {
    listSlide.push(slidesData);
  }

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
          {listSlide.map((item, idx) => {
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
    return <SlideProductDetailItem imageSource={{item}} />;
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
          data={listSlide}
          pagingEnabled
          bounces={false}
          onScroll={onScroll}
          decelerationRate={0}
          renderItem={renderItem}
          scrollEventThrottle={16}
          initialNumToRender={listSlide.length}
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
