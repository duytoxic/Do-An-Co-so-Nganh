import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

import FastImage from 'react-native-fast-image';

import Icon from '../../components/common/Icon';
import {useDispatch} from 'react-redux';

import {removeCartItem} from '../../reducers/cart';

const icons = {
  x: {
    name: 'x',
    type: 'feather',
    size: 28,
  },
  inc: {
    name: 'add',
    type: 'ionicons',
    size: 28,
  },
  dec: {
    name: 'minus',
    type: 'entypo',
    size: 28,
  },
};

import {
  BLACK_COLOR_1,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

function ItemInCart({id, name, weight, price, quantity, image}) {
  const dispatch = useDispatch();

  let totalPrice = price * quantity;

  const AlertConfirmDeleteItem = idItem =>
    Alert.alert('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng', '', [
      {
        text: 'Hủy',
        onPress: () => console.log('Cancel Pressed'),
        style: 'colorPrimary',
      },
      {text: 'Xác nhận', onPress: () => dispatch(removeCartItem(idItem))},
    ]);

  return (
    <>
      <View style={styles.listItems}>
        <View style={styles.itemInCart}>
          <View style={styles.itemImage}>
            <FastImage
              style={styles.image}
              source={{uri: image}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={styles.itemContent}>
            <View style={styles.itemContentTop}>
              <View>
                <Text style={styles.nameItem}>{name}</Text>
                <Text style={styles.weightItem}>{weight}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.iconDeleteContainer}
                onPress={() => AlertConfirmDeleteItem(id)}>
                <Icon {...icons.x} style={styles.iconDelete} />
              </TouchableOpacity>
            </View>
            <View style={styles.itemContentBottom}>
              <View style={styles.selectNumber}>
                <Text style={styles.quantity}>{quantity} sản phẩm</Text>
              </View>
              <Text style={styles.itemPrice}>
                {Number(totalPrice).format()} đ
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
  },
  listItems: {
    paddingHorizontal: MAIN_PADDING,
  },
  itemInCart: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: GRAY_COLOR_2,
  },
  itemImage: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
  itemContent: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemContentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  selectNumber: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 3,
    color: BLACK_COLOR_1,
  },
  nameItem: {
    color: BLACK_COLOR_1,
    fontWeight: '600',
    fontSize: 15,
  },
  weightItem: {
    color: GRAY_COLOR_1,
    fontSize: 13,
  },
  iconDeleteContainer: {
    marginBottom: 12,
  },
  iconDelete: {
    color: GRAY_COLOR_1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK_COLOR_1,
  },
  colorPrimary: {
    color: PRIMARY_COLOR,
  },
});

export default ItemInCart;
