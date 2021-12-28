import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, LogBox} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import SearchBox from '../../components/common/SearchBox';
import TitlePage from '../../components/product/TitlePage';
import Product from '../../components/common/Product';

import {WHITE_COLOR} from '../../theme/colors';
import {MAIN_PADDING, BASE, WINDOW_WIDTH} from '../../theme/sizes';

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

function ProductScreen({route}) {
  const [listProduct, setListProduct] = useState();

  useEffect(() => {
    let list = [];
    firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          list.push(doc.data());
          setListProduct(list);
        });
      });
  }, []);

  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <TitlePage title={route.params.data.name} leftIcon={icons.marker} />
        <SearchBox
          iconLeft={icons.search}
          iconRight={icons.cancel}
          placeholder="Tìm kiếm"
          style={styles.widthSearchBox}
        />
        <FlatList
          numColumns={2}
          data={listProduct}
          columnWrapperStyle={styles.wrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <Product
                id={item.id}
                index={index}
                price={item.price}
                name={item.name}
                imageURL={item.imageURL}
                weight={item.weight}
                desc={item.description}
              />
            );
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
  wrapper: {
    width: WINDOW_WIDTH - MAIN_PADDING * 2,
  },
});

export default ProductScreen;
