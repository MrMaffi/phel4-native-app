import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import ErrorMessage from '../forms/ErrorMessage';

import colors from '../../config/colors';

export default function AppTextInput({
  error,
  title,
  placeholder,
  style,
  visible,
  ...otherProps
}) {
  return (
    <View style={[styles.border, style]}>
      {error && visible ? (
        <ErrorMessage
          error={error}
          style={[styles.title, { color: colors.danger, marginLeft: 15 }]}
          visible={visible}
        >
          {error}
        </ErrorMessage>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: colors.androidGray,
    borderRadius: 22,
    borderWidth: 1,
    height: 55,
    justifyContent: 'center',
    marginVertical: 12,
    width: '100%',
  },
  title: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    color: colors.black,
    flexDirection: 'row',
    fontSize: 15,
    fontFamily: 'Nunito_400Regular',
    paddingHorizontal: 5,
    marginHorizontal: 15,
    position: 'absolute',
    top: '-25%',
  },
  input: {
    flex: 1,
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    marginHorizontal: 15,
    height: 50,
  },
});
