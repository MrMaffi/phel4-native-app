import React from 'react';
import { StyleSheet, Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: defaultStyles.text,
});
