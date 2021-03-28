import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 14,
    marginLeft: 25,
  },
});
