import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import SearchBox from '../../components/common/SearchBox';
import Product from '../../components/common/Product';
import IconBack from '../../components/common/ButtonBack';

import {WHITE_COLOR, BLACK_COLOR_1, PRIMARY_COLOR} from '../../theme/colors';
import {MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let list = [];
    setLoading(true);
    firestore()
      .collection('products')
      .where('catId', '==', route.params.data.catId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          list.push(doc.data());
        });
        setTimeout(() => {
          setListProduct(list);
          setLoading(false);
        }, 500);
      });
  }, [route.params.data.catId]);

  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <View style={styles.header}>
          <IconBack styleIcon={styles.headerLeftIcon} />
          <View style={styles.headerTitle}>
            <Text style={styles.title}>{route.params.data.name}</Text>
          </View>
        </View>
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
        <View style={styles.loadingContainer}>
          {loading ? (
            <>
              <View style={styles.loading}>
                <ActivityIndicator size="large" color={PRIMARY_COLOR} />
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
  },
  wrapper: {
    width: WINDOW_WIDTH - MAIN_PADDING * 2,
    marginHorizontal: MAIN_PADDING,
  },
  widthSearchBox: {
    width: WINDOW_WIDTH - 2 * MAIN_PADDING,
    marginLeft: MAIN_PADDING,
  },
  header: {
    height: 50,
  },
  headerTitle: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: BLACK_COLOR_1,
  },
  loadingContainer: {
    flex: 1,
  },
});

export default ProductScreen;
