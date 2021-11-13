import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {BLACK_COLOR_1} from '../../theme/colors';

function PostListPreview({name, imageURL, index}) {
  return (
    <View style={[styles.container, index % 2 === 0 ? 'left' : 'right']}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageURL}} />
      </View>
      <View style={styles.textBottom}>
        <Text style={styles.text} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'rgba(83, 177, 177, 0.1)',
    borderColor: 'rgba(83, 177, 177, 0.7)',
    borderRadius: 17,
    borderWidth: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 95,
    width: 95,
    resizeMode: 'contain',
  },
  textBottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: BLACK_COLOR_1,
    textAlign: 'center',
  },
});

export default PostListPreview;
