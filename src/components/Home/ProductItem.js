import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import {hp, wp} from '../../helper/utilities';
import { colors } from '../../helper/colorConstant';

const ProductItem = ({
  title,
  source,
  onPress,
  textStyle,
  textViewStyle,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.mainContainer}>
      <Image
        source={source}
        style={styles.imgStyle}
      />
      <View style={[styles.textViewStyle, textViewStyle]}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  imgStyle: {
    width: wp(40),
    height: wp(40),
  },
  textViewStyle: {
    alignItems: 'center',
    paddingVertical: hp(6),
    paddingHorizontal: wp(2), 
    borderBottomColor: colors.primary,
  },
});

export default ProductItem;
