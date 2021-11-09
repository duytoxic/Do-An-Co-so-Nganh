import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../../global/styles';
import Icon from './Icon';
import {BASE} from '../../theme/sizes';

const icons = {
  back: {
    type: 'material-community',
    name: 'arrow-left',
    color: colors.headerText,
    size: 28,
  },
};

function Header({title}) {
  return (
    <>
      <View style={styles.header}>
        <Icon {...icons.back} onPress={() => {}} style={styles.icon} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  icon: {
    marginLeft: BASE,
  },
});

export default Header;
