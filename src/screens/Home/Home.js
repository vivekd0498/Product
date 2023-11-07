import React, { useState } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import { strings } from '../../helper/constants';
import { colors } from '../../helper/colorConstant';
import { images } from '../../helper/imageConstant';
import { product_List, product_sub_list } from '../../helper/localData';
import { fontSize, hp, wp } from '../../helper/utilities';
import { Header, ProductInnerItem, ProductItem, StatusBarView } from '../../components';

const Home = () => {
  const [productList, setProductList] = useState(product_List);
  const [productSubList, setProductSubList] = useState(product_sub_list);

  const onProductItemPress = (data) => {
    let finalArr = productList.map(productItem => {
      if (data?.id === productItem.id) {
        return {...productItem, isSelected: true};
      } else {
        return {...productItem, isSelected: false};
      }
    });
    setProductList(finalArr);
  }
  const renderProductItem = ({item, index}) => {
    return (
      <ProductItem
        title={item?.name}
        source={item?.image}
        onPress={() => onProductItemPress(item)}
        textViewStyle={{borderBottomWidth: hp(item.isSelected ? 2 : 0)}}
        textStyle={{
          fontWeight: item?.isSelected ? '500' : '400',
          fontSize: fontSize(item?.isSelected ? 12 : 12),
          color: item?.isSelected ? colors.primary : colors.secondary
        }}
      />
    );
  };

  const onAddPress = () => {

  };

  const renderProductInnerItem = ({item, index}) => {
    return (
      <ProductInnerItem
        title={item?.title}
        price={item?.price}
        grams={item?.grams}
        source={item?.image}
        onAddPress={onAddPress}
        description={item?.description}
      />
    );
  };

  const onBackPress = () => {
  };

  const onCartPress = () => {
  };
  const onSearchPress = () => {
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBarView />
      <Header
        counter={strings.count}
        title={strings.products}
        onBackPress={onBackPress}
        onCartPress={onCartPress}
        onSearchPress={onSearchPress}
      />
      <View style={styles.topBorderView}/>
      <View>
        <FlatList
          horizontal
          data={productList}
          renderItem={renderProductItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainerStyle}
          ItemSeparatorComponent={() => <View style={styles.itemSepratorStyle}/>}
        />
      </View>
      <FlatList
        data={productSubList}
        renderItem={renderProductInnerItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subFlatListContainerStyle}
        ItemSeparatorComponent={() => <View style={styles.subListItemSeprator}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topBorderView: {
    height: hp(1),
    backgroundColor: colors.topBorder,
  },
  flatListContainerStyle: {
    paddingVertical: hp(10),
    paddingHorizontal: wp(20),
  },
  itemSepratorStyle: {
    width: wp(16),
  },
  subFlatListContainerStyle: {
    paddingVertical: hp(20),
    paddingHorizontal: wp(20),
  },
  subListItemSeprator: {
    height: hp(1),
    marginVertical: hp(16),
    backgroundColor: colors.topBorder,
  },
});

export default Home;
