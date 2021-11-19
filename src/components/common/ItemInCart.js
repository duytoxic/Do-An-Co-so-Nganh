import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from '../../components/common/Icon';
import {useDispatch} from 'react-redux';

import {
  selectItemInCart,
  removeCartItem,
  InCreaseQuantity,
} from '../../reducers/cart';

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

function ItemInCart({id, name, weight, price, quantity}, props) {
  console.log(props);
  const [number, setNumber] = useState(quantity);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = () => {
    setNumber(number + 1);
    if (number > 9) {
      setNumber(10);
    }
    dispatch(InCreaseQuantity(id, number));
  };
  return (
    <>
      <View style={styles.listItems}>
        <View style={styles.itemInCart}>
          <View style={styles.itemImage}>
            <Image
              style={styles.image}
              source={{uri: 'http://placeimg.com/640/480'}}
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
                onPress={() => dispatch(removeCartItem(id))}>
                <Icon {...icons.x} style={styles.iconDelete} />
              </TouchableOpacity>
            </View>
            <View style={styles.itemContentBottom}>
              <View style={styles.selectNumber}>
                <TouchableOpacity
                  style={styles.iconContainer}
                  activeOpacity={0.6}>
                  <Icon {...icons.dec} style={styles.dec} />
                </TouchableOpacity>

                <TextInput
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  value={quantity.toString()}
                  editable={false}
                  style={styles.quantity}
                />

                <TouchableOpacity
                  style={[styles.iconContainer]}
                  activeOpacity={0.6}
                  onPress={() => handleIncreaseQuantity(id)}
                  enable={false}>
                  <Icon {...icons.inc} style={styles.inc} />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemPrice}>{price * quantity} VND</Text>
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

export default ItemInCart;
