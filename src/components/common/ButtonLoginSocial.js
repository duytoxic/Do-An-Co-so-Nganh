import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Icon from './Icon';

import {PRIMARY_COLOR} from '../../theme/colors';
import {BASE} from '../../theme/sizes';

function ButtonLoginSocial({
  styleSignin,
  typeIcon,
  nameIcon,
  colorIcon,
  title,
  styleText,
  icon,
}) {
  return (
    <>
      <TouchableOpacity
        style={[styles.signIn, styleSignin]}
        activeOpacity={0.6}>
        <Icon
          type={typeIcon}
          color={colorIcon}
          name={nameIcon}
          {...icon}
          style={styles.iconStyle}
          size={25}
        />
        <Text style={[styles.textSign, styleText]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  signIn: {
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    flexDirection: 'row',
    paddingVertical: BASE,
  },
  iconStyle: {
    marginRight: 20,
    position: 'absolute',
    left: BASE,
    top: 8,
    bottom: 0,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonLoginSocial;
