import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import FastImage from 'react-native-fast-image';

import {
  BLACK_COLOR_1,
  WHITE_COLOR,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
} from '../../theme/colors';
import {BASE, MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';
import {PRODUCT_DETAIL} from '../../navigations/screenName';

import ButtonAdd from './ButtonAdd';

import {useNavigation} from '@react-navigation/core';

function Product(props) {
  const {id, name, price, weight, desc, imageURL, index} = props;

  const navigation = useNavigation();

  return (
    <View
      style={[styles.container, index % 2 === 0 ? styles.left : styles.right]}>
      <View style={styles.header}>
        <FastImage
          style={styles.image}
          source={{uri: imageURL}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.top}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.weight}>{weight}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.price}>{price} đ</Text>
          <ButtonAdd
            onPress={() =>
              navigation.navigate(PRODUCT_DETAIL, {
                productId: id,
                productName: name,
                productPrice: price,
                productWeight: weight,
                productDesc: desc,
                productImage: imageURL,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: GRAY_COLOR_2,
    borderWidth: 1,
    backgroundColor: WHITE_COLOR,
    width: (WINDOW_WIDTH - 2 * MAIN_PADDING) / 2 - BASE * 0.8,
    height: 220,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'column',
    marginVertical: BASE * 0.8,
  },
  left: {
    marginRight: BASE * 0.8,
  },
  right: {
    marginLeft: BASE * 0.8,
  },
  header: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 80,
    width: 100,
  },
  content: {
    flex: 5,
    paddingHorizontal: BASE,
    paddingTop: 0,
    paddingBottom: BASE,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: BLACK_COLOR_1,
  },
  weight: {
    fontSize: 13,
    color: GRAY_COLOR_1,
    marginTop: 5,
  },
  bottom: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  price: {
    color: BLACK_COLOR_1,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Product;
