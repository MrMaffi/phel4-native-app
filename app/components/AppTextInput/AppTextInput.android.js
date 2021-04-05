import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../../config/colors';

export default function AppTextInput({
  TitleItem,
  title,
  style,
  placeholder,
  ...otherProps
}) {
  return (
    <View style={styles.border}>
      <TitleItem style={styles.title}>{title}</TitleItem>
      <TextInput style={[styles.input, style]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderColor: colors.androidGray,
    borderRadius: 22,
    borderWidth: 2,
    height: 55,
    justifyContent: 'center',
    marginVertical: 12,
    width: '100%',
  },
  title: {
    alignItems: 'center',
    backgroundColor: colors.primary,
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
