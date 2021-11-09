import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

// Components
import Icon from './Icon';

// Theme
import {BASE} from '../../theme/sizes';
import {BLACK_COLOR_1, GRAY_COLOR_1, GRAY_COLOR_2} from '../../theme/colors';
// import {BLACK_COLOR_1, GRAY_COLOR_1} from '../../theme/colors';

/**
 *
 * @param {import('react-native').TextInputProps} props
 */
function TextField({
  rightComp = null,
  styleWrapper,
  rightIcon = null,
  leftIcon = null,
  rightIconStyle,
  onPressRightIcon,
  style,
  label,
  ...otherProps
}) {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={[styles.group, styleWrapper]}>
          <TextInput
            placeholderTextColor={BLACK_COLOR_1}
            style={[styles.input, style]}
            underlineColorAndroid="transparent"
            {...otherProps}
          />

          {rightComp && rightComp()}

          {rightIcon && (
            <Icon
              style={[styles.icon, rightIconStyle]}
              type={rightIcon.type}
              size={rightIcon.size}
              name={rightIcon.name}
              onPress={onPressRightIcon}
            />
          )}
        </View>
        <View style={styles.underline} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: BASE * 1.3,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: {
    color: GRAY_COLOR_1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    paddingVertical: 3,
    fontSize: 16,
    lineHeight: 22,
    color: BLACK_COLOR_1,
    paddingLeft: 0,
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: GRAY_COLOR_2,
  },
});

export default TextField;
