import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import SearchBox from '../../components/common/SearchBox';
import TitlePage from '../../components/product/TitlePage';
import Icon from '../../components/common/Icon';

import {
  PRIMARY_COLOR,
  BLACK_COLOR_1,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
  WHITE_COLOR,
} from '../../theme/colors';
import {BASE, MAIN_PADDING} from '../../theme/sizes';

const DEFAULT_DATA = [
  {
    title: 'Fresh Vegetables',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/product/red-apple-2x.png'),
  },
  {
    title: 'Tiêu đề quảng cáo',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/product/red-apple-2x.png'),
  },
  {
    title: 'Fresh Vegetables',
    subTitle: 'Nội dung quảng cáo',
    imageSource: require('../../../assets/images/intro/health-img.jpg'),
  },
];

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

function ShopScreen() {
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <TitlePage
          title="Cửa hàng"
          leftIcon={icons.marker}
          rightIcon={icons.search}
        />
        <SearchBox
          iconLeft={icons.search}
          iconRight={icons.cancel}
          placeholder="Tìm kiếm"
          style={styles.widthSearchBox}
        />
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MAIN_PADDING,
    backgroundColor: WHITE_COLOR,
  },
  widthSearchBox: {
    width: '100%',
  },
});

export default ShopScreen;
