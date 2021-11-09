import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Logo from '../svg/Logo';
import Icon from '../common/Icon';

import {BASE} from '../../theme/sizes';

const icons = {
  marker: {
    name: 'md-location-sharp',
    type: 'ionicon',
    size: 22,
  },
};

function SubTitle({textLocation, style}) {
  return (
    <View style={[styles.container, style]}>
      <Logo />
      <View style={styles.marker}>
        <Icon {...icons.marker} />
        <Text style={styles.text}>{textLocation}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: BASE * 2,
  },
  marker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    marginLeft: 3,
  },
});

export default SubTitle;
