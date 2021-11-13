import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import SearchBox from '../../components/common/SearchBox';
import TitlePage from '../../components/product/TitlePage';
import Product from '../../components/common/Product';

import {WHITE_COLOR} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

const icons = {
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

function ShopScreen({routes}) {
  console.log(routes);
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <TitlePage
          title="Đồ uống"
          leftIcon={icons.marker}
          rightIcon={icons.search}
        />
        <SearchBox
          iconLeft={icons.search}
          iconRight={icons.cancel}
          placeholder="Tìm kiếm"
          style={styles.widthSearchBox}
        />
        <FlatList
          numColumns={3}
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <Product index={index} />;
          }}
          keyExtractor={(item, index) => index.toString()}
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
});

export default ShopScreen;
