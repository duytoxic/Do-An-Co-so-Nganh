import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import SearchBox from '../../components/common/SearchBox';
import TitlePage from '../../components/product/TitlePage';
import CategoriesListPreview from '../../components/product/CategoriesListPreview';

import {WHITE_COLOR} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

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
  const [listCategories, setListCategories] = useState();

  useEffect(() => {
    let listCat = [];
    firestore()
      .collection('categories')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          listCat.push(doc.data());
        });
        setListCategories(listCat);
      });
  }, []);

  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <TitlePage title="Cửa hàng" />
        <SearchBox
          iconLeft={icons.search}
          iconRight={icons.cancel}
          placeholder="Tìm kiếm"
          style={styles.widthSearchBox}
        />
        <CategoriesListPreview items={listCategories} />
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
