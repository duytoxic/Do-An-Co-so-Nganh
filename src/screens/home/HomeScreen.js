import React from 'react';
import {StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

import Locations from '../../components/home/Locations';
import SearchBox from '../../components/common/SearchBox';
import Slides from '../../components/home/Slides';
import RecomendListPreview from '../../components/home/RecommendListPreview';
import Button from '../../components/common/Button';

// screens

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

import {MAIN_PADDING} from '../../theme/sizes';

function HomeScreen({}) {
  const navigation = useNavigation();

  const icons = {
    marker: {
      name: 'md-location-sharp',
      type: 'ionicon',
      size: 22,
    },
    eyeOff: {
      type: 'feather',
      name: 'eye-off',
      size: 22,
    },
    search: {
      type: 'antdesign',
      name: 'search1',
      size: 22,
    },
    cancel: {
      type: 'material',
      name: 'cancel',
      size: 18,
    },
  };

  const DATA = [
    {
      id: 'sp001',
      name: 'Organic Bananas',
      weight: '0.5kg',
      price: 20000,
      imageURL: require('../../../assets/images/product/test-product_1.png'),
      desc: 'Đây là một túi táo đỏ',
    },
    {
      id: 'sp002',
      name: 'Red Apple',
      weight: '1kg',
      price: 500000,
      imageURL: require('../../../assets/images/product/test-product.png'),
      desc: 'Đây là một túi táo đỏ',
    },
  ];

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Locations textLocation="TP.Vinh, Nghệ An" />
          <SearchBox
            iconLeft={icons.search}
            iconRight={icons.cancel}
            placeholder="Search Store"
            style={styles.widthSearchBox}
          />
          <Slides />
          {/* <RecomendListPreview listProductRecommend={DATA} />
          <RecomendListPreview listProductRecommend={DATA} /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MAIN_PADDING,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 8,
  },
  widthSearchBox: {
    width: '100%',
  },
});

export default React.memo(HomeScreen);
