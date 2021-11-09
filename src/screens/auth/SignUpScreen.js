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
//import screen name
import {LOGIN_SCREEN} from '../../navigations/screenName';
//import variables color
import {PRIMARY_COLOR, BLACK_COLOR_1} from '../../theme/colors';
//import variables size
import {BASE, MAIN_PADDING} from '../../theme/sizes';

import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import {AuthContext} from '../../navigations/AuthProvider';

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
  checkCircle: {
    type: 'feather',
    name: 'check-circle',
    size: 22,
  },
  x: {
    type: 'feather',
    name: 'x-circle',
    size: 22,
  },
  facebook: {
    type: 'font-awesome-5',
    name: 'facebook-f',
    size: 22,
  },
  google: {
    type: 'font-awesome-5',
    name: 'google',
    size: 22,
  },
};

function SignUpScreen() {
  const [showPassWord, setShowPassWord] = useState(false);
  const navigation = useNavigation();

  const {register} = useContext(AuthContext);

  return (
    <>
      <SafeAreaContainer>
        <KeyboardAvoidingView>
          <ScrollView>
            <View style={styles.container}>
              <AuthBanner />
              <AuthBrand
                brand="Đăng ký"
                desc="Nhập thông tin của bạn để tiếp tục"
              />
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                  register(values.email, values.password);
                  () => navigation.navigate(LOGIN_SCREEN);
                }}>
                {props => (
                  <View>
                    <TextField
                      label="Tên đăng nhập"
                      onChangeText={props.handleChange('username')}
                      value={props.values.username}
                    />

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

                    <Text style={styles.textTerm}>
                      By continuing you agree to our
                      <Text onPress={() => {}} style={styles.textLink}>
                        Terms of Service
                      </Text>
                      and
                      <Text onPress={() => {}} style={styles.textLink}>
                        Privacy Policy.
                      </Text>
                    </Text>

                    <Button
                      title="đăng ký"
                      textTransform="uppercase"
                      color={PRIMARY_COLOR}
                      onPress={props.handleSubmit}
                    />

                    <View style={styles.signupWrapper}>
                      <Text style={styles.notAccount}>
                        Bạn đã có tài khoản?
                      </Text>
                      <PressableWrapper
                        onPress={() => navigation.navigate(LOGIN_SCREEN)}>
                        <Text style={styles.txtSignUp}>Đăng nhập</Text>
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
    marginBottom: BASE * 2,
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
  textTerm: {
    letterSpacing: 0.8,
    fontSize: 14,
  },
  terms: {
    textAlignVertical: 'center',
  },
  textLink: {
    color: PRIMARY_COLOR,
    letterSpacing: 0.8,
    textAlignVertical: 'center',
    marginTop: 10,
    marginLeft: 5,
  },
  iconColor: {
    color: PRIMARY_COLOR,
  },
});

export default SignUpScreen;
