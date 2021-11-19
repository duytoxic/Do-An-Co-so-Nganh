import React from 'react';
import {Text, StatusBar, StyleSheet, ScrollView} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import MyText from '../../components/common/MyText';
import TitlePage from '../../components/product/TitlePage';
import ItemInCart from '../../components/common/ItemInCart';

import {
  selectItemInCart,
  removeCartItem,
  InCreaseQuantity,
} from '../../reducers/cart';

import {useSelector} from 'react-redux';

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
  PRIMARY_COLOR,
  BLACK_COLOR_1,
  GRAY_COLOR_1,
  GRAY_COLOR_2,
  WHITE_COLOR,
} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

import {useDispatch} from 'react-redux';

function ProductDetailScreen() {
  const dispatch = useDispatch();

  const listItemInCart = useSelector(selectItemInCart);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={GRAY_COLOR_2}
        barStyle={'dark-content'}
      />
      <SafeAreaContainer style={styles.container}>
        <TitlePage title="My Cart" />
        <ScrollView>
          {listItemInCart.length !== 0 ? (
            listItemInCart.map((item, index) => {
              return (
                <ItemInCart key={index} {...item} quantity={item.quantity} />
              );
            })
          ) : (
            <Text>Không có sản phẩm nào trong giỏ hàng</Text>
          )}
        </ScrollView>
        <Button
          title="Go to Checkout"
          textTransform="uppercase"
          color={PRIMARY_COLOR}
        />
      </SafeAreaContainer>
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
    paddingVertical: 20,
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
  iconContainer: {
    borderWidth: 1,
    borderColor: GRAY_COLOR_2,
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inc: {
    color: PRIMARY_COLOR,
  },
  dec: {
    color: GRAY_COLOR_1,
  },
  quantity: {
    textAlign: 'center',
    fontSize: 18,
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
  iconDelete: {
    color: GRAY_COLOR_1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: BLACK_COLOR_1,
  },
});

export default ProductDetailScreen;
