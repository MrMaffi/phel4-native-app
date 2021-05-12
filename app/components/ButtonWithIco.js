import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

import colors from '../config/colors';

export default function AppButton({
  style,
  backgroundColor = colors.secondary,
  title,
  iconName,
  onPress = () => console.log('Tapped'),
}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableHighlight onPress={onPress}>
        <View style={[styles.button, { backgroundColor }]}>
          <AppText style={styles.text}>{title}</AppText>
          <MaterialCommunityIcons
            name={iconName}
            size={16}
            color={colors.white}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 110,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    marginRight: 6,
  },
});
