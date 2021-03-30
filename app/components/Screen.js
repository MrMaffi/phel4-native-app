import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 20,
    paddingTop: Constants.statusBarHeight,
  },
});
