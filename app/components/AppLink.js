import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

export default function AppLink({ children, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.link, style]}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
