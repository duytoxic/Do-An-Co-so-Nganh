import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (__DEV__) {
              console.log('Đăng nhập thành công');
            }
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            if (e.code === 'auth/invalid-email') {
              Alert.alert('Email không hợp lệ');
            } else {
              Alert.alert(e.code);
            }
          }
        },
        register: async (email, password) => {
          try {
            if (__DEV__) {
              console.log('Đăng ký thành công');
            }
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
              Alert.alert('Email đã tồn tại');
            } else if (e.code === 'auth/invalid-email') {
              Alert.alert('Email không hợp lệ');
            } else {
              Alert.alert(e.code);
            }
          }
        },
        logout: async () => {
          try {
            if (__DEV__) {
              console.log('Đăng xuất thành công');
            }
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
