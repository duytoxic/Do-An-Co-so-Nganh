import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {WHITE_COLOR, PRIMARY_COLOR} from '../../theme/colors';
import {SHOP_SCREEN} from '../../navigations/screenName';

function ButtonToShop() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate(SHOP_SCREEN)}>
      <Text style={styles.text}>Đến cửa hàng</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default ButtonToShop;
