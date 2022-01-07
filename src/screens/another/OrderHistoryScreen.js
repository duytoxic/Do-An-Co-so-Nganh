import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {v4 as uuidv4} from 'uuid';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import ButtonBack from '../../components/common/ButtonBack';
import Icon from '../../components/common/Icon';
import OrderHistoryItem from '../../components/product/OrderHistoryItem';

import {MAIN_PADDING} from '../../theme/sizes';
import {WHITE_COLOR, BLACK_COLOR_1, PRIMARY_COLOR} from '../../theme/colors';

const icons = {
  edit: {
    name: 'edit',
    type: 'antdesign',
    size: 23,
  },
};

function OrderHistoryScreen() {
  const [userOrdered, setUserOrderd] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let list = [];
    auth().onAuthStateChanged(user => {
      if (user) {
        setLoading(true);
        firestore()
          .collection('orders')
          .where('userId', '==', user.uid)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.data().orderId = doc.id;
              list.push(doc.data());
            });

            setTimeout(() => {
              setUserOrderd(list);
              setLoading(false);
            }, 1000);
            if (__DEV__) {
              console.log('Order added!');
            }
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

        <FlatList
          data={userOrdered}
          columnWrapperStyle={styles.content}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            let dateOrder =
              new Date(item.createdAt.toDate()).toLocaleDateString('vi-VN') +
              ' lúc ' +
              new Date(item.createdAt.toDate()).toLocaleTimeString();
            return (
              <OrderHistoryItem
                key={index}
                orderId={item.orderId}
                timeOrder={dateOrder}
                totalPrice={item.totalPrice}
                products={item.items}
                onLongPress={() => handlePressOrderedItem(item.orderId)}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />

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
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default OrderHistoryScreen;
