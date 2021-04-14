import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

export default function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        clearButtonMode="always"
        style={[styles.input, style]}
        {...otherProps}
        placeholderTextColor={colors.lightGray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.androidGray,
    borderRadius: 18,
    flexDirection: 'row',
    marginVertical: 12,
    paddingHorizontal: 20,
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
