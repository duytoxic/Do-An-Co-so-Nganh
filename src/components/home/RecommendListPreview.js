import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Product from '../common/Product';
import LeftRightLayout from '../../layouts/LeftRightLayout';
import {BASE} from '../../theme/sizes';
// import PressableWrapper from '../common/PressableWrapper';

function RecommendListPreview({listProductRecommend}) {
  return (
    <View style={styles.container}>
      <LeftRightLayout
      // leftComp={() => (

      // )}
      // rightComp={<Text>abc</Text>}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentInset={{
          // iOS ONLY
          top: 0,
          left: 20,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={styles.scrollViewPaddingHorizontal}>
        {listProductRecommend &&
          listProductRecommend.map((item, id) => (
            <Product
              key={id}
              name={item.name}
              weight={item.weight}
              price={item.price}
              imageURL={item.imageURL}
              style={styles.layoutProductHorizontal}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollViewPaddingHorizontal: {
    // paddingHorizontal: Platform.OS === 'android' ? 20 : 0,
  },
  layoutProductHorizontal: {
    marginRight: BASE * 1.5,
  },
});

export default RecommendListPreview;
