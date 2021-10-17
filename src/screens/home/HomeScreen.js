import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import Icon from '../../components/common/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const icons = {
  search: {
    type: 'feather',
    name: 'search',
    size: 20,
  },
};

function HomeScreen() {
  return (
    <>
      <Icon name="rocket" size={30} color="#900" />
      {/* <myIcon /> */}
      <Icon type="feather" name="search" style={styles.icon} />
      <Text>abc</Text>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'red',
  },
});

export default HomeScreen;
