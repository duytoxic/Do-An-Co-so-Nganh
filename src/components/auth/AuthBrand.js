import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {PRIMARY_COLOR, GRAY_COLOR_1, BLACK_COLOR_1} from '../../theme/colors';
import {BASE} from '../../theme/sizes';

function AuthBrand({brand, desc}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: BASE,
  },
  brand: {
    color: BLACK_COLOR_1,
    fontSize: 26,
    marginBottom: BASE * 0.6,
    fontWeight: 'bold',
  },
  desc: {
    color: GRAY_COLOR_1,
    fontSize: 16,
  },
});

export default AuthBrand;
