import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from '../common/Icon';

const icons = {
  location: {
    name: 'location',
    type: 'evilicon',
    size: 23,
  },
  shiping: {
    name: 'shipping-fast',
    type: 'font-awesome-5',
    size: 15,
  },
};

import {
  BLACK_COLOR_1,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../theme/colors';
import {BASE, MAIN_PADDING} from '../../theme/sizes';

function OrderHistoryItem({
  orderId,
  timeOrder,
  totalPrice,
  products,
  onLongPress,
}) {
  const ItemOrdered = ({name, quantity, price}) => {
    return (
      <View style={styles.item}>
        <Text style={[styles.itemName, styles.colorBlack]}>{name}</Text>
        <Text style={[styles.itemQuantity, styles.colorBlack]}>
          x {quantity}
        </Text>
        <Text style={[styles.itemPrice, styles.colorBlack]}>{price} đ</Text>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onLongPress={onLongPress}
        activeOpacity={0.7}>
        <View style={styles.itemHeader}>
          <View>
            <Text style={styles.orderdId}>Đơn #100</Text>
            <View style={styles.orderPlace}>
              <Icon style={styles.iconShiping} {...icons.shiping} />
              <Text>Nhận hàng tại nhà</Text>
            </View>
          </View>
          <Text style={styles.orderTime}>{timeOrder}</Text>
        </View>
        <View style={styles.itemContent}>
          {products &&
            products.map((item, index) => {
              return (
                <ItemOrdered
                  key={index}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
              );
            })}
        </View>
        <View style={styles.itemFooter}>
          <View style={styles.itemLocation}>
            <Icon {...icons.location} />
            <Text>Nghệ An</Text>
          </View>
          <View style={styles.total}>
            <Text>Tổng</Text>
          </View>
          <View style={styles.totalPrice}>
            <Text style={[styles.textTotalPrice, styles.colorBlack]}>
              {totalPrice} đ
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    padding: BASE,
    marginVertical: BASE * 0.8,
    backgroundColor: WHITE_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginHorizontal: MAIN_PADDING,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderdId: {
    color: PRIMARY_COLOR,
  },
  orderPlace: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconShiping: {
    marginRight: 5,
    color: GRAY_COLOR_1,
  },
  orderTime: {
    color: GRAY_COLOR_1,
    fontSize: 13,
  },
  itemContent: {
    marginTop: 5,
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: GRAY_COLOR_2,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  itemName: {
    flex: 6,
    fontWeight: '700',
  },
  itemQuantity: {
    flex: 2,
  },
  itemPrice: {
    flex: 3,
    textAlign: 'right',
  },
  colorBlack: {
    color: BLACK_COLOR_1,
  },
  itemFooter: {
    flexDirection: 'row',
    paddingTop: BASE,
  },
  itemLocation: {
    flex: 6,
    flexDirection: 'row',
  },
  total: {
    flex: 2,
  },
  totalPrice: {
    flex: 4,
  },
  textTotalPrice: {
    textAlign: 'right',
  },
});

export default OrderHistoryItem;
