import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import ButtonBack from '../../components/common/ButtonBack';
import Icon from '../../components/common/Icon';
import OrderHistoryItem from '../../components/product/OrderHistoryItem';

import {MAIN_PADDING} from '../../theme/sizes';
import {WHITE_COLOR, BLACK_COLOR_1} from '../../theme/colors';

const icons = {
  edit: {
    name: 'edit',
    type: 'antdesign',
    size: 23,
  },
};

function OrderHistoryScreen() {
  const [userOrdered, setUserOrderd] = useState();

  useEffect(() => {
    let list = [];
    auth().onAuthStateChanged(user => {
      if (user) {
        firestore()
          .collection('orders')
          .where('userId', '==', user.uid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.data().orderId = doc.id;
              list.push(doc.data());
            });
            setUserOrderd(list);
          });
      }
    });
  }, []);

  const removeOrderedItem = orderId => {
    firestore()
      .collection('orders')
      .doc(orderId)
      .delete()
      .then(() => {
        console.log('deleted successful!');
      });
  };

  const handlePressOrderedItem = orderId =>
    Alert.alert('Bạn có chắc muốn xóa đơn hàng', '', [
      {
        text: 'Hủy',
        onPress: () => console.log('Hủy'),
        style: 'cancel',
      },
      {text: 'Đồng ý', onPress: () => removeOrderedItem(orderId)},
    ]);

  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <ButtonBack />
            <Text style={styles.headerTitle}>Lịch sử mua hàng</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon {...icons.edit} />
          </View>
        </View>
        <ScrollView style={styles.content}>
          {userOrdered &&
            userOrdered.map((item, index) => {
              let dateOrder =
                new Date(item.createdAt.toDate()).toLocaleDateString('vi-VN') +
                ' lúc ' +
                new Date(item.createdAt.toDate()).toLocaleTimeString();
              return (
                <>
                  <OrderHistoryItem
                    key={index}
                    timeOrder={dateOrder}
                    totalPrice={item.totalPrice}
                    products={item.items}
                    onLongPress={() => handlePressOrderedItem(item.orderId)}
                  />
                </>
              );
            })}
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    backgroundColor: WHITE_COLOR,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 15,
    fontSize: 18,
    color: BLACK_COLOR_1,
  },
  headerRight: {
    marginRight: MAIN_PADDING,
  },
});

export default OrderHistoryScreen;
