import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import ButtonBack from '../../components/common/ButtonBack';
import SlidesProductDetail from '../../components/product/SlidesProductDetail';
import Icon from '../../components/common/Icon';
import Hr from '../../components/common/Hr';
import Button from '../../components/common/Button';
import MyText from '../../components/common/MyText';

import LeftRightLayout from '../../layouts/LeftRightLayout';

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
import {BASE, MAIN_PADDING} from '../../theme/sizes';

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

function ProductDetail() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={GRAY_COLOR_2}
        barStyle={'dark-content'}
      />
      <SafeAreaContainer>
        <View style={styles.productHeader}>
          <ButtonBack />
          <SlidesProductDetail slidesData={DEFAULT_DATA} />
        </View>
        <ScrollView style={styles.productContent}>
          <View style={styles.productTitle}>
            <Text style={styles.productName}>name Product</Text>
            <Icon {...icons.heart} style={styles.iconHeart} />
          </View>
          <Text style={styles.weight}>1kg, Price</Text>

          <View style={styles.productPrice}>
            <View style={styles.selectNumber}>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon {...icons.dec} style={styles.dec} />
              </TouchableOpacity>
              {/* <View style={styles.number}>
                <Text style={styles.numberText}>1</Text>
              </View> */}
              <TextInput
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                // value={item.quantity.toString()}
                value="1"
                editable={false}
                style={styles.quantity}
              />

              <TouchableOpacity activeOpacity={0.6}>
                <Icon {...icons.inc} style={styles.inc} />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>100000 VND</Text>
          </View>
          <Hr />
          <LeftRightLayout
            LeftComp={() => {
              <MyText text="Thống kê" style={styles.textHeadingSection} />;
            }}
            // rightComp
          />

          <Button
            title="Thêm vào giỏ hàng"
            textTransform="uppercase"
            color={PRIMARY_COLOR}
          />
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  productHeader: {
    paddingHorizontal: MAIN_PADDING,
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
});

export default ProductDetail;
