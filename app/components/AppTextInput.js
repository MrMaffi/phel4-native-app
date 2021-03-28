import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../config/colors';

export default function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={styles.border}>
      <View style={styles.background} />
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
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
    borderColor: colors.white,
    borderRadius: 22,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.05,
    width: '100%',
  },
  background: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 55,
    opacity: 0.5,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
  },
  icon: {
    color: colors.lightGray,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    height: 50,
  },
});
