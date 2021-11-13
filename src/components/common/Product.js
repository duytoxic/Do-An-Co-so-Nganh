import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {
  BLACK_COLOR_1,
  WHITE_COLOR,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
} from '../../theme/colors';
import {BASE, WINDOW_WIDTH} from '../../theme/sizes';
import {PRODUCT_DETAIL} from '../../navigations/screenName';

import ButtonAdd from './ButtonAdd';

import {useNavigation} from '@react-navigation/core';

function Product({imageURL, name, weight, price, style}) {
  const navigation = useNavigation();
  // let percent = `${(progess * 100) / total}%`;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Image source={imageURL} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View style={styles.top}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.weight}>{weight} Kg</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.price}>{price} VND</Text>
          <ButtonAdd onPress={() => navigation.navigate(PRODUCT_DETAIL)} />
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
    width: (WINDOW_WIDTH - 4 * BASE) / 2 - BASE,
    height: 230,
    borderRadius: 15,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
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
