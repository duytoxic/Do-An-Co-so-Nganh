import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import BottomMainNavigator from './BottomMainNavigator';
import LoadingScreen from '../screens/another/LoadingScreen';

export default function Routes() {
  const [isAuth, setIsAuth] = useState(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setIsAuth(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (loading) {
    return <LoadingScreen />;
  }

  // return <>{isAuth ? <BottomMainNavigator /> : <AuthNavigator />}</>;
  return (
    <>
      <BottomMainNavigator />
    </>
  );
}
