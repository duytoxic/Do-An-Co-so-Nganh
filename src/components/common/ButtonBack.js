import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from './Icon';

import {BLACK_COLOR_1} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

// Define icons
const icons = {
  chevronLeft: {
    type: 'font-awesome',
    name: 'angle-left',
    size: 32,
  },
};

function IconBack() {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <Icon {...icons.chevronLeft} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: MAIN_PADDING,
  },
  icon: {
    color: BLACK_COLOR_1,
  },
});

export default IconBack;
