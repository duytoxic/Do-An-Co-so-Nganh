import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import ButtonBack from '../../components/common/ButtonBack';
import SlidesProductDetail from '../../components/product/SlidesProductDetail';
import Icon from '../../components/common/Icon';
import Hr from '../../components/common/Hr';
import Button from '../../components/common/Button';
import MyText from '../../components/common/MyText';

import LeftRightLayout from '../../layouts/LeftRightLayout';

import {useDispatch} from 'react-redux';
import {InCreaseQuantity, DeCreaseQuantity} from '../../reducers/cart';

const icons = {
  heart: {
    name: 'heart-o',
    type: 'font-awesome',
    size: 25,
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
import {BASE, MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';

const DEFAULT_DATA = [
  {
    title: 'Fresh Vegetables',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/product/red-apple-2x.png'),
  },
  {
    title: 'Tiêu đề quảng cáo',
    subTitle: 'Get Up to 40% OFF',
    imageSource: require('../../../assets/images/product/red-apple-2x.png'),
  },
  {
    title: 'Fresh Vegetables',
    subTitle: 'Nội dung quảng cáo',
    imageSource: require('../../../assets/images/intro/health-img.jpg'),
  },
];

function ProductDetailScreen({route}) {
  const [numberItem, setNumberItem] = useState(1);
  const productInfo = {
    id: route.params.productId,
    name: route.params.productName,
    price: route.params.productPrice,
    weight: route.params.productWeight,
    desc: route.params.productDesc,
    image: route.params.productImage,
    quantity: numberItem,
  };

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectItem = item => {
    navigation.goBack();
    dispatch({
      type: 'cart/addToCart',
      payload: {...item},
    });
  };

  const handleClickIncrease = () => {
    setNumberItem(numberItem + 1);
    dispatch(InCreaseQuantity(productInfo.id, numberItem));
  };

  const handleClickDecrease = () => {
    setNumberItem(numberItem - 1);
    if (numberItem === 1) {
      setNumberItem(1);
    }
    dispatch(DeCreaseQuantity(productInfo.id, numberItem));
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={GRAY_COLOR_2}
        barStyle={'dark-content'}
      />
      <SafeAreaContainer style={styles.container}>
        <View style={styles.productHeader}>
          <ButtonBack />
          <SlidesProductDetail slidesData={productInfo.image} />
        </View>
        <ScrollView style={styles.productContent}>
          <View style={styles.productTitle}>
            <Text style={styles.productName}>{productInfo.name}</Text>
            <Icon {...icons.heart} style={styles.iconHeart} />
          </View>
          <Text style={styles.weight}>{productInfo.weight}</Text>

          <View style={styles.productPrice}>
            <View style={styles.selectNumber}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleClickDecrease()}>
                <Icon {...icons.dec} style={styles.dec} />
              </TouchableOpacity>

              <TextInput
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                value={numberItem.toString()}
                editable={false}
                style={styles.quantity}
              />

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleClickIncrease()}>
                <Icon {...icons.inc} style={styles.inc} />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>{productInfo.price} VND</Text>
          </View>
          <Hr />
          <LeftRightLayout
            LeftComp={() => {
              <MyText text="Thống kê" style={styles.textHeadingSection} />;
            }}
            // rightComp
          />
          <Text>{productInfo.desc}</Text>
        </ScrollView>
        <View style={styles.button}>
          <Button
            title="Thêm vào giỏ hàng"
            textTransform="uppercase"
            color={PRIMARY_COLOR}
            onPress={() => selectItem(productInfo)}
          />
        </View>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
  },
  productHeader: {
    // paddingHorizontal: MAIN_PADDING,
    paddingTop: BASE,
    height: 290,
    backgroundColor: GRAY_COLOR_2,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  productContent: {
    paddingHorizontal: MAIN_PADDING,
    paddingTop: BASE,
  },
  productTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    color: BLACK_COLOR_1,
    fontSize: 22,
    fontWeight: '600',
  },
  iconHeart: {
    color: GRAY_COLOR_1,
  },
  weight: {
    fontSize: 16,
    color: GRAY_COLOR_1,
    fontWeight: '600',
    marginTop: 5,
  },
  selectNumber: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inc: {
    color: PRIMARY_COLOR,
  },
  dec: {
    color: GRAY_COLOR_1,
  },
  number: {
    borderWidth: 1,
    borderColor: GRAY_COLOR_2,
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  quantity: {
    width: 45,
    height: 45,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: GRAY_COLOR_2,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 12,
    color: BLACK_COLOR_1,
  },
  numberText: {
    fontSize: 18,
  },
  productPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: BASE * 2,
    marginBottom: BASE * 1.5,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: BLACK_COLOR_1,
  },
  button: {
    width: WINDOW_WIDTH - 2 * MAIN_PADDING,
    position: 'absolute',
    bottom: BASE,
    left: MAIN_PADDING,
    right: MAIN_PADDING,
  },
});

export default ProductDetailScreen;
