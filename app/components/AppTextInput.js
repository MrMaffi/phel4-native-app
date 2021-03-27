import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={styles.border}>
      <View style={styles.background} />
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={22} style={styles.icon} />
        )}
        <TextInput
          clearButtonMode="always"
          style={[styles.input, style]}
          {...otherProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: defaultStyles.colors.white,
    borderRadius: 22,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 15,
    shadowColor: defaultStyles.colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.05,
    width: '100%',
  },
  background: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 22,
    height: 60,
    opacity: 0.5,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
  },
  icon: {
    color: defaultStyles.colors.lightGray,
    marginRight: 10,
  },
  input: {
    flex: 1,
    ...defaultStyles.text,
  },
});
