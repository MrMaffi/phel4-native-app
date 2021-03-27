import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import colors from '../../config/colors';

export default function AppButton({ style, title, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 22,
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: colors.white,
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 22,
  },
});
