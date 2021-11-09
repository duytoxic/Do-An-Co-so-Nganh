import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import Icon from './Icon';

import {BASE} from '../../theme/sizes';
import {BLACK_COLOR_1, GRAY_COLOR_1, WHITE_COLOR_2} from '../../theme/colors';

function SearchBox({
  searchStyle,
  iconLeft,
  iconRight,
  onPressRightIcon,
  style,
  ...props
}) {
  const [showCancelInput, setShowCancelInput] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const handleChangeText = () => {
    if (textSearch !== '') {
      setShowCancelInput(true);
    } else {
      setShowCancelInput(false);
    }
  };
  return (
    <>
      <View style={[styles.container, style]}>
        {iconLeft && (
          <Icon
            style={styles.iconLeft}
            type={iconLeft.type}
            size={iconLeft.size}
            name={iconLeft.name}
            onPress={onPressRightIcon}
          />
        )}
        <TextInput
          {...props}
          style={[styles.input, props.style]}
          underlineColorAndroid="transparent"
          onChangeText={() => handleChangeText()}
        />
        {iconRight && (
          <Icon
            style={[
              styles.iconRight,
              showCancelInput ? styles.show : styles.hide,
            ]}
            type={iconRight.type}
            size={iconRight.size}
            name={iconRight.name}
            onPress={onPressRightIcon}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: BASE,
    paddingHorizontal: BASE * 1.5,
    paddingVertical: BASE * 1.5,
    backgroundColor: WHITE_COLOR_2,
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 50,
    color: GRAY_COLOR_1,
  },
  iconLeft: {
    color: BLACK_COLOR_1,
    paddingRight: 10,
  },
  icon: {
    padding: 15,
    color: BLACK_COLOR_1,
    backgroundColor: GRAY_COLOR_1,
    height: 50,
    width: 50,
  },
  hide: {
    display: 'none',
  },
});

export default SearchBox;
