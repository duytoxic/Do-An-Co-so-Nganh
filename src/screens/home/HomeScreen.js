import React, {useContext} from 'react';
import {StatusBar, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

import Locations from '../../components/home/Locations';
import SearchBox from '../../components/common/SearchBox';
import Slides from '../../components/home/Slides';
import RecomendListPreview from '../../components/home/RecommendListPreview';
import Button from '../../components/common/Button';
import {AuthContext} from '../../context/AuthContext';

// screens
import LoadingScreen from '../../screens/another/LoadingScreen';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

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
    paddingHorizontal: MAIN_PADDING,
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
