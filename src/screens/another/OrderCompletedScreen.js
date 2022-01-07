import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import LottieView from 'lottie-react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';
import ButtonOutline from '../../components/common/ButtonOutline';

import {MAIN_PADDING, WINDOW_WIDTH, BASE} from '../../theme/sizes';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';
import {
  SHOP_NAVIGATOR_SCREEN,
  ORDER_COMPLETED_SCREEN,
} from '../../navigations/screenName';

function OrderCompletedScreen() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <LottieView
          source={require('../../../assets/animations/782-check-mark-success.json')}
          style={styles.iconCompleted}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text>order successful</Text>
        <View style={styles.button}>
          <Button
            title="Kiểm tra đơn hàng"
            color={PRIMARY_COLOR}
            onPress={() => navigation.navigate(ORDER_COMPLETED_SCREEN)}
          />

          <ButtonOutline
            title="Quay lại cửa hàng"
            color={PRIMARY_COLOR}
            onPress={() => navigation.navigate(SHOP_NAVIGATOR_SCREEN)}
          />
        </View>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: MAIN_PADDING,
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  iconCompleted: {
    height: 150,
    alignSelf: 'center',
  },
  button: {
    width: WINDOW_WIDTH - 2 * MAIN_PADDING,
    position: 'absolute',
    bottom: BASE,
    left: MAIN_PADDING,
    right: MAIN_PADDING,
  },
});

export default OrderCompletedScreen;
