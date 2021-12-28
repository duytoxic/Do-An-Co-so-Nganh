import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Icon from '../../components/common/Icon';
import AccountItem from '../../components/account/AccountItem';
import ButtonOutline from '../../components/common/ButtonOutline';

import {AuthContext} from '../../context/AuthContext';
import firestore from '@react-native-firebase/firestore';

import {useNavigation} from '@react-navigation/core';

import {
  WHITE_COLOR,
  PRIMARY_COLOR,
  BLACK_COLOR_1,
  GRAY_COLOR_2,
} from '../../theme/colors';
import {BASE, MAIN_PADDING} from '../../theme/sizes';
import {ORDER_HISTORY_SCREEN} from '../../navigations/screenName';

const icons = {
  edit: {
    name: 'edit',
    type: 'antdesign',
    size: 23,
  },
  shopping: {
    name: 'shopping-bag',
    type: 'feather',
    size: 23,
  },
  logout: {
    name: 'logout',
    type: 'material',
    size: 23,
  },
  detail: {
    name: 'card-account-details-outline',
    type: 'material-community',
    size: 23,
  },
  payment: {
    name: 'payments',
    type: 'material',
    size: 23,
  },
  notification: {
    name: 'ios-notifications-outline',
    type: 'ionicon',
    size: 23,
  },
  help: {
    name: 'help-circle',
    type: 'feather',
    size: 23,
  },
};

function AccountScreen() {
  const navigation = useNavigation();
  const [state, setstate] = useState([]);
  const {logout} = useContext(AuthContext);

  useEffect(() => {
    firestore()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        let docs = querySnapshot.docs;
        docs.map(doc => {
          setstate(doc.data().items);
        });
      });
  }, []);

  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/account/Rectangle.png')}
            style={styles.avatar}
          />
          <View style={styles.headerText}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Duy toxic</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon style={styles.iconEdit} {...icons.edit} />
              </TouchableOpacity>
            </View>
            <Text style={styles.email}>duy2kruoiw@gmail.com</Text>
          </View>
        </View>
        <View style={styles.content}>
          <AccountItem
            title="Lịch sử mua hàng"
            icon={icons.shopping}
            onPress={() => {
              navigation.navigate(ORDER_HISTORY_SCREEN);
            }}
          />
          <AccountItem title="Thông tin cá nhân" icon={icons.detail} />
          <AccountItem title="Phương thức thanh toán" icon={icons.payment} />
          <AccountItem title="Thông báo" icon={icons.notification} />
          <AccountItem title="Trợ giúp" icon={icons.help} />
        </View>
        <View style={styles.button}>
          <ButtonOutline
            iconLeft={icons.logout}
            title="đăng xuất"
            textTransform="uppercase"
            color={PRIMARY_COLOR}
            onPress={() => logout()}
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
  header: {
    padding: MAIN_PADDING,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: GRAY_COLOR_2,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 15,
  },
  headerText: {
    marginLeft: BASE,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: BLACK_COLOR_1,
  },
  iconEdit: {
    color: PRIMARY_COLOR,
  },
  button: {
    paddingHorizontal: MAIN_PADDING,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: BASE,
  },
});

export default AccountScreen;
