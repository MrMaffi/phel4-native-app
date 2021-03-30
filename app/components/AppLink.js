import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

import colors from '../config/colors';

export default function AppLink({ children, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.link, style]}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontSize: 18,
    marginVertical: 3,
    textDecorationLine: 'underline',
  },
});
