import React from 'react';
import Constants from 'expo-constants';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function Screen({ children, style }) {
  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.container, style]}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  container: {
    minHeight: Dimensions.get('window').height,
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 60,
  },
});
