import React from 'react';
import {View, Text} from 'react-native';

import Icon from '../../components/common/Icon';

// Define icons
const icons = {
  chevronLeft: {
    type: 'font-awesome',
    name: 'angle-left',
    size: 32,
  },
};

function ProductDesc() {
  return (
    <>
      <View>
        <Text>abc</Text>
        <Icon {...icons.chevronLeft} />
      </View>
    </>
  );
}

export default ProductDesc;
