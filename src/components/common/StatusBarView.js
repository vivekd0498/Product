import React from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import {statusBar} from '../../helper/utilities';
import { colors } from '../../helper/colorConstant';

const StatusBarView = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <StatusBar 
          translucent
          backgroundColor={colors.statusColor}
          barStyle="light-content"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: statusBar,
    backgroundColor: colors.statusColor
  },
});

export default StatusBarView;
