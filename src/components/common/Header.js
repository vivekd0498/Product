import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import {strings} from '../../helper/constants';
import { icons } from '../../helper/iconConstant';
import {fontSize, wp} from '../../helper/utilities';
import { colors } from '../../helper/colorConstant';

const Header = ({
    title,
    counter,
    onCartPress,
    onBackPress,
    onSearchPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftMainView}>
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={icons.back}
            style={styles.backIconStyle}
            resizeMode={strings.contain}
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <View style={styles.rightMainView}>
        <TouchableOpacity onPress={onSearchPress}>
          <Image
            source={icons.search}
            style={styles.rightIconStyle}
            resizeMode={strings.contain}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCartPress}>
          <Image
            source={icons.cart}
            style={[styles.rightIconStyle, {
                marginLeft: wp(15)
            }]}
            resizeMode={strings.contain}
          />
          <View style={styles.cartCounterView}>
            <Text style={styles.countTxtStyle}>{counter}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: wp(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftMainView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconStyle: {
    width: wp(20),
    height: wp(20),
  },
  titleStyle: {
    fontWeight: '500',
    marginLeft: wp(15),
    fontSize: fontSize(20),
    color: colors.textColor,
  },
  rightMainView: {
    flex: 1,
    marginRight: wp(10),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightIconStyle: {
    width: wp(24),
    height: wp(24),
  },
  cartCounterView: {
    top: -wp(10),
    width: wp(16),
    height: wp(16),
    right: -wp(10),
    position: 'absolute',
    alignItems: 'center',
    borderRadius: wp(16/2),
    justifyContent: 'center',
    backgroundColor: '#FFA347',
  },
  countTxtStyle: {
    fontWeight: '400',
    color: colors.white,
    fontSize: fontSize(10),
  },
});

export default Header;
