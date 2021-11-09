import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
//import components
import AuthHeader from '../../components/auth/AuthHeader';
import AuthBrand from '../../components/auth/AuthBrand';
import TextField from '../../components/common/TextField';
import SafeAreaContainer from '../../components/common/SafeAreaContainer';
import Button from '../../components/common/Button';
import PressableWrapper from '../../components/common/PressableWrapper';
import Hr from '../../components/common/Hr';
import ButtonLoginSocial from '../../components/common/ButtonLoginSocial';
import {AuthContext} from '../../context/AuthContext';
//import screen name
import {SIGN_UP_SCREEN} from '../../navigations/screenName';
//import variables color
import {PRIMARY_COLOR} from '../../theme/colors';
//import variables size
import {BASE, MAIN_PADDING} from '../../theme/sizes';

import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';

// Define icons
const icons = {
  user: {
    name: 'email',
    type: 'fontisto',
    size: 22,
  },
  lock: {
    name: 'lock',
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
  check: {
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

function SignInScreen() {
  const [showPassWord, setShowPassWord] = useState(false);
  const navigation = useNavigation();

  const {login} = useContext(AuthContext);

  return (
    <>
      <SafeAreaContainer>
        <KeyboardAvoidingView>
          <AuthHeader title="MY ACCOUNT" />
          <ScrollView>
            <View style={styles.container}>
              <AuthBrand brand="Sign In" />
              <Text style={styles.textRequest}>
                Please enter the email and password
              </Text>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                  login(values);
                  // console.log(values);
                }}>
                {props => (
                  <View>
                    <TextField
                      label="Email"
                      placeholder="Enter your email"
                      autoCompleteType="email"
                      autoCapitalize="none"
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                    />

                    <TextField
                      leftIcon={icons.lock}
                      placeholder="Password"
                      keyboardType="default"
                      multiline={false}
                      autoCapitalize="none"
                      secureTextEntry={!showPassWord}
                      rightIcon={showPassWord ? icons.eye : icons.eyeOff}
                      onPressRightIcon={() => setShowPassWord(!showPassWord)}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                    />

                    <Button
                      arrowRight
                      title="đăng nhập"
                      textTransform="uppercase"
                      color={PRIMARY_COLOR}
                      onPress={props.handleSubmit}
                    />

                    <PressableWrapper>
                      <Text style={styles.textResetPass}>Forgot password?</Text>
                    </PressableWrapper>

                    <Hr text="OR" />

                    <ButtonLoginSocial
                      title="Sign In with Facebook"
                      icon={icons.facebook}
                      onPress={() => {}}
                    />

                    <ButtonLoginSocial
                      title="Sign In with Google"
                      icon={icons.google}
                      onPress={() => {}}
                    />

                    <View style={styles.signupWrapper}>
                      <Text>Bạn chưa có tài khoản</Text>
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
    marginBottom: BASE * 2,
    color: '#1c1c1c',
    textAlign: 'center',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: BASE * 2,
  },
  txtSignUp: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    color: PRIMARY_COLOR,
    marginLeft: 7,
  },
});

export default SignInScreen;
