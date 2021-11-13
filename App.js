/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

// Redux
import store from './src/config/store';

import Navigation from './src/navigations';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
