import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from '../../components/common/Icon';
import {GRAY_COLOR_1, BLACK_COLOR_1} from '../../theme/colors';
import {BASE} from '../../theme/sizes';

const icons = {
  arrowRight: {
    name: 'arrow-forward-ios',
    type: 'material',
    size: 20,
  },
};

function OrderItem({leftText, rightText}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textLeft}>{leftText}</Text>
        <View style={styles.right}>
          <Text style={styles.textRight}>{rightText}</Text>
          <Icon style={styles.icon} {...icons.arrowRight} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: BASE,
  },
  textLeft: {
    color: GRAY_COLOR_1,
    fontSize: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRight: {
    color: BLACK_COLOR_1,
    fontSize: 16,
    marginRight: 5,
  },
  icon: {
    color: BLACK_COLOR_1,
  },
});

export default OrderItem;
