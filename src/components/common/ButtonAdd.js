import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from './Icon';

import {WHITE_COLOR, PRIMARY_COLOR} from '../../theme/colors';

// Define icons
const icons = {
  add: {
    type: 'ionicons',
    name: 'add',
    size: 30,
  },
};

function ButtonAdd({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <Icon {...icons.add} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    width: 40,
    height: 40,
    borderRadius: 17,
  },
  icon: {
    color: WHITE_COLOR,
  },
});

export default ButtonAdd;
