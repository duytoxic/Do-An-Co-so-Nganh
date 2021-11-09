import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

function LoadingScreen() {
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default LoadingScreen;
