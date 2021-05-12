import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function AppTitle({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 32,
    textTransform: 'capitalize',
  },
});
