import React from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import CategoriesItem from './CategoryItem';

import {useNavigation} from '@react-navigation/core';
import {PRODUCT_SCREEN} from '../../navigations/screenName';

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function CategoriesListPreview({items}) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={items}
          columnWrapperStyle={styles.wrapper}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            // console.log(item);
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(PRODUCT_SCREEN, {data: item})
                }
                style={styles.itemContainer}
                activeOpacity={0.6}>
                <CategoriesItem
                  name={item.name}
                  imageURL={item.imageURL}
                  index={index}
                  bgColor={getRandomColor()}
                  iconColor={getRandomColor()}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 100,
  },
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemContainer: {
    width: '47.5%',
    marginBottom: 15,
  },
});

export default CategoriesListPreview;
