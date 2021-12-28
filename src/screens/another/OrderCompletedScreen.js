import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import LottieView from 'lottie-react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';

import {MAIN_PADDING, WINDOW_WIDTH} from '../../theme/sizes';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';
import {SHOP_SCREEN} from '../../navigations/screenName';

function OrderCompletedScreen() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <LottieView
          source={require('../../../assets/animations/782-check-mark-success.json')}
          style={{height: 100, alignSelf: 'center'}}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text>order successful</Text>
        <View style={styles.button}>
          <Button
            title="Quay lại cửa hàng"
            color={PRIMARY_COLOR}
            textTransform="uppercase"
            onPress={() => navigation.navigate(SHOP_SCREEN)}
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
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: MAIN_PADDING,
    left: 0,
    right: 0,
    // width: WINDOW_WIDTH - 2* MAIN_PADDING,
    // marginHorizontal: MAIN_PADDING,
  },
});

export default OrderCompletedScreen;
