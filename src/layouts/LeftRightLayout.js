import React from 'react';
import {StyleSheet, View} from 'react-native';

import {BASE} from '../theme/sizes';

function LeftRightLayout({
  leftComp: LeftComp,
  // LeftComp,
  leftCompStyle,
  rightComp: RightComp,
  rightCompStyle,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      {LeftComp && <LeftComp style={leftCompStyle} />}

      {RightComp && <RightComp style={rightCompStyle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: BASE,
  },
});

export default LeftRightLayout;
