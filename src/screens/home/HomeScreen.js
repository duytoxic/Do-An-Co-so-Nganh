import React, {useEffect, useContext} from 'react';
import {View, StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

import Locations from '../../components/home/Locations';
import SearchBox from '../../components/common/SearchBox';
import Slides from '../../components/home/Slides';
import RecomendListPreview from '../../components/home/RecommendListPreview';
import Button from '../../components/common/Button';
import {AuthContext} from '../../navigations/AuthProvider';

// screens
import LoadingScreen from '../../screens/another/LoadingScreen';

import {
  PRIMARY_COLOR,
  BLACK_COLOR_1,
  GRAY_COLOR_1,
  WHITE_COLOR,
} from '../../theme/colors';

import {BASE, MAIN_PADDING} from '../../theme/sizes';

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
      name: 'Orenge Juice',
      weight: 1,
      price: 50000,
      imageURL: require('../../../assets/images/product/test-product.png'),
    },
    {
      name: 'Red Apple',
      weight: 1,
      price: 500000,
      imageURL: require('../../../assets/images/product/test-product.png'),
    },
  ];
  const {logout} = useContext(AuthContext);
  const {user} = useContext(AuthContext);
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
          <RecomendListPreview listProductRecommend={DATA} />
          <RecomendListPreview listProductRecommend={DATA} />

          <Button
            arrowRight
            title="đăng xuất"
            textTransform="uppercase"
            color={PRIMARY_COLOR}
            onPress={() => logout()}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE * 2,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  paddingContent: {
    // paddingHorizontal: 30,
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
