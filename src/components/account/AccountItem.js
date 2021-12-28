import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from '../../components/common/Icon';

import {PRIMARY_COLOR, GRAY_COLOR_2, BLACK_COLOR_1} from '../../theme/colors';
import {BASE, MAIN_PADDING} from '../../theme/sizes';

const icons = {
  arrowRight: {
    name: 'arrow-forward-ios',
    type: 'material',
    size: 20,
  },
};

function AccountItem({title, icon, onPress}) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={onPress}>
        <View style={styles.left}>
          <Icon {...icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Icon {...icons.arrowRight} />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: BASE * 1.8,
    paddingHorizontal: MAIN_PADDING,
    borderBottomWidth: 1,
    borderColor: GRAY_COLOR_2,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: BLACK_COLOR_1,
    marginLeft: BASE * 2,
  },
});

export default AccountItem;
