import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import RNModal from 'react-native-modal';
import {useNavigation} from '@react-navigation/core';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {v5 as uuidv5} from 'uuid';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';
import TitlePage from '../../components/product/TitlePage';
import ItemInCart from '../../components/common/ItemInCart';
import CartEmpty from '../../components/common/CartEmpty';
import OrderItem from '../../components/common/OrderItem';

import {
  PRIMARY_COLOR,
  GRAY_COLOR_2,
  WHITE_COLOR,
  BLACK_COLOR_1,
} from '../../theme/colors';
import {BASE, MAIN_PADDING} from '../../theme/sizes';

import {ORDER_COMPLETED_SCREEN} from '../../navigations/screenName';

import {selectItemInCart} from '../../reducers/cart';

import {useSelector} from 'react-redux';

const createThreeButtonAlert = () =>
  Alert.alert(
    'Thông báo',
    'Bạn cần thêm sản phẩm vào giỏ hàng trước khi thanh toán',
    [
      {
        text: 'Hủy',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Đồng ý', onPress: () => console.log('OK Pressed')},
    ],
  );

function CartScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(e) {
    setUser(e);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };

  const listItemInCart = useSelector(selectItemInCart);

  const total = listItemInCart
    .map(item => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVND = Number(total).format();

  const handleCheckout = () => {
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  const handleAddOrdersToFirebase = () => {
    if (listItemInCart.length === 0) {
      createThreeButtonAlert();
    } else {
      setLoading(true);
      firestore()
        .collection('orders')
        .add({
          items: listItemInCart,
          totalPrice: totalVND,
          createdAt: firestore.FieldValue.serverTimestamp(),
          userId: user.uid,
          orderId: uuid(),
        })
        .then(() => {
          setTimeout(() => {
            setLoading(false);
            navigation.navigate(ORDER_COMPLETED_SCREEN);
            setModalVisible(false);
          }, 2500);
          if (__DEV__) {
            console.log('Order added!');
          }
        });
    }
  };

  const checkoutModalContent = () => {
    return (
      <View>
        <View style={styles.modalCheckoutContainer}>
          <View>
            <Text style={styles.modalTitle}>Kiểm tra</Text>
          </View>

          <OrderItem leftText="Giao Hàng" rightText="Chọn phương thức" />
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Tổng tiền</Text>
            <Text>{totalVND} đ</Text>
          </View>

          <Button
            title="Thanh toán"
            color={PRIMARY_COLOR}
            onPress={handleAddOrdersToFirebase}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={GRAY_COLOR_2}
        barStyle={'dark-content'}
      />
      <RNModal
        statusBarTranslucent
        useNativeDriverForBackdrop
        propagateSwipe
        isVisible={modalVisible}
        swipeDirection={'down'}
        onSwipeComplete={onClose}
        style={styles.modalWrapper}
        onBackdropPress={onClose}
        backdropOpacity={0.2}>
        {checkoutModalContent()}
      </RNModal>
      <SafeAreaContainer style={styles.container}>
        <TitlePage title="Giỏ hàng của tôi" />
        <ScrollView>
          {listItemInCart && listItemInCart.length !== 0 ? (
            listItemInCart.map((item, index) => {
              return <ItemInCart key={index} {...item} />;
            })
          ) : (
            <CartEmpty
              style={styles.cartEmpty}
              text="Không có sản phẩm nào trong giỏ hàng"
            />
          )}
        </ScrollView>
        <View style={styles.button}>
          <Button
            title="Kiểm tra"
            color={PRIMARY_COLOR}
            textRight={totalVND.toString()}
            onPress={() => handleCheckout()}
          />
        </View>
        {loading ? (
          <>
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={PRIMARY_COLOR} />
            </View>
          </>
        ) : (
          <></>
        )}
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
  },
  button: {
    paddingHorizontal: MAIN_PADDING,
    marginBottom: BASE,
  },
  modalWrapper: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalCheckoutContainer: {
    backgroundColor: WHITE_COLOR,
    padding: MAIN_PADDING,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitle: {
    color: BLACK_COLOR_1,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    color: BLACK_COLOR_1,
  },
  content: {
    backgroundColor: WHITE_COLOR,
    height: 500,
  },
  loadingContainer: {
    backgroundColor: '000',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default CartScreen;
