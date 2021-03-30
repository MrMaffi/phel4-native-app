import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

export default function AppTitle({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    fontFamily: 'Nunito_700Bold',
    fontSize: 26,
    textTransform: 'capitalize',
  },
});
