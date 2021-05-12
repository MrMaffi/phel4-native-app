import React from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';

import colors from '../../config/colors';

export default function ErrorMessage({ error, style, visible, withInfo }) {
  if (!error || !visible) {
    return null;
  }

  if (!(withInfo && withInfo.error === error)) {
    return <AppText style={[styles.error, style]}>{error}</AppText>;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert('Warning!', withInfo.info);
      }}
    >
      <View style={[styles.container, style]}>
        <AppText style={styles.error}>{error}</AppText>
        <MaterialCommunityIcons
          name="information"
          size={14}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    marginLeft: 25,
  },
  icon: {
    color: colors.danger,
    marginLeft: 2,
  },
});
