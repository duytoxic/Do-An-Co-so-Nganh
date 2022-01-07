import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
//import components
import AuthBrand from '../../components/auth/AuthBrand';
import TextField from '../../components/common/TextField';
import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';
import PressableWrapper from '../../components/common/PressableWrapper';
import AuthBanner from '../../components/auth/AuthBanner';
import {AuthContext} from '../../context/AuthContext';

//import screen name
import {SIGN_UP_SCREEN} from '../../navigations/screenName';
//import variables color
import {PRIMARY_COLOR, BLACK_COLOR_1} from '../../theme/colors';
//import variables size
import {BASE, MAIN_PADDING} from '../../theme/sizes';

import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';

// Define icons
const icons = {
  check: {
    name: 'check',
    type: 'feather',
    size: 22,
  },
  eye: {
    name: 'eye',
    type: 'feather',
    size: 22,
  },
  eyeOff: {
    type: 'feather',
    name: 'eye-off',
    size: 22,
  },
  x: {
    type: 'feather',
    name: 'x-circle',
    size: 22,
  },
};

function LoginScreen() {
  const [showPassWord, setShowPassWord] = useState(false);
  const navigation = useNavigation();

  const {login} = useContext(AuthContext);

  const validate = (values, props) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  return (
    <>
      <SafeAreaContainer>
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={styles.container}>
              <AuthBanner />
              <AuthBrand brand="Đăng nhập" desc="Nhập email và password" />
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                  login(values.email, values.password);
                }}>
                {props => (
                  <View>
                    <TextField
                      label="Email"
                      autoCompleteType="email"
                      autoCapitalize="none"
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                      rightIcon={icons.check}
                      rightIconStyle={styles.iconColor}
                    />

                    <TextField
                      label="Mật khẩu"
                      keyboardType="default"
                      multiline={false}
                      autoCapitalize="none"
                      secureTextEntry={!showPassWord}
                      rightIcon={showPassWord ? icons.eye : icons.eyeOff}
                      onPressRightIcon={() => setShowPassWord(!showPassWord)}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                    />

                    <PressableWrapper>
                      <Text style={styles.textResetPass}>Quên mật khẩu?</Text>
                    </PressableWrapper>

                    <Button
                      title="đăng nhập"
                      textTransform="uppercase"
                      color={PRIMARY_COLOR}
                      onPress={props.handleSubmit}
                    />

                    <View style={styles.signupWrapper}>
                      <Text style={styles.notAccount}>
                        Bạn chưa có tài khoản?
                      </Text>
                      <PressableWrapper
                        onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>
                        <Text style={styles.txtSignUp}>Đăng ký</Text>
                      </PressableWrapper>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: MAIN_PADDING,
  },
  textRequest: {
    textAlign: 'center',
  },
  textResetPass: {
    marginTop: BASE,
    marginBottom: BASE,
    color: BLACK_COLOR_1,
    textAlign: 'right',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: BASE,
  },
  notAccount: {
    fontWeight: 'bold',
    fontSize: 14,
    color: BLACK_COLOR_1,
  },
  txtSignUp: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    color: PRIMARY_COLOR,
    marginLeft: 7,
  },
  iconColor: {
    color: PRIMARY_COLOR,
  },
});

export default LoginScreen;
