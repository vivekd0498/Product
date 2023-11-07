import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import { strings } from '../../helper/constants';
import { colors } from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';
import { icons } from '../../helper/iconConstant';

const ProductInnerItem = ({
  grams,
  price,
  title,
  source,
  onAddPress,
  description,
}) => {
  return (
    <View style={styles.mainContainer}>
        <Image
          source={source}
          style={styles.imgStyle}
          resizeMode={strings.contain}
        />
        <View style={styles.centerViewStyle}>
          <Text style={styles.txtStyle}>{title}</Text>
          {description?.length > 0 && <Text style={[styles.txtStyle, {
            marginTop: hp(6),
            color: colors.prodDescTxt,
          }]}>{description}</Text>}
          <Text style={[styles.txtStyle, {
            marginTop: hp(6),
            fontSize: fontSize(15),
            color: colors.prodPriceTxt,
          }]}>{price}</Text>
          <Text style={[styles.txtStyle, {
            marginTop: hp(6),
            color: colors.prodDescTxt,
          }]}>{grams}</Text>
        </View>
        <TouchableOpacity style={styles.btnViewStyle} onPress={onAddPress}>
          <Image
            source={icons.add}
            style={styles.addIconStyle}
            resizeMode={strings.contain}
          />
          <Text style={styles.addTxtStyle}>{strings.add}</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imgStyle: {
    width: wp(60),
    height: wp(60),
  },
  centerViewStyle: {
    flex: 1,
    marginHorizontal: wp(12),
  },
  txtStyle: {
    fontWeight: '400',
    letterSpacing: 0.5,
    fontSize: fontSize(12),
    color: colors.prodTitleTxt,
  },
  desc: {
    fontSize: fontSize(12),
    letterSpacing: 0.5,
    fontWeight: '400',
    marginTop: hp(6),
    color: colors.prodDescTxt
  },
  btnViewStyle: {
    borderWidth: wp(1),
    borderRadius: wp(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(4),
    paddingHorizontal: wp(10),
    borderColor: colors.btnBorder,
  },
  addIconStyle: {
    width: wp(12),
    height: wp(12),
  },
  addTxtStyle: {
    marginLeft: wp(5),
    fontWeight: '400',
    color: colors.primary,
    fontSize: fontSize(12),
  },
});

export default ProductInnerItem;
