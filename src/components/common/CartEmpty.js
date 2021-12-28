import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonToShop from './ButtonToShop';

function CartEmpty({text}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <ButtonToShop />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

export default CartEmpty;
