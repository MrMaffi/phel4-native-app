import React from 'react';
import Constants from 'expo-constants';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import colors from '../config/colors';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={[styles.container, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: Platform.OS !== 'ios' ? Constants.statusBarHeight : null,
    paddingHorizontal: 20,
  },
});
