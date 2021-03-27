import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import AppText from '../AppText';

import defaultStyles from '../../config/styles';

export default function AppButton({ style, title, onPress }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <AppText style={styles.text}>{title}</AppText>
        </View>
      </TouchableHighlight>
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
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 22,
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: defaultStyles.colors.white,
    fontFamily: 'Nunito_600SemiBold',
  },
});
