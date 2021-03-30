import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import ErrorMessage from './ErrorMessage';

import colors from '../../config/colors';

export default function CodeInput() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { errors, values, touched } = useFormikContext();
  values.code = value;

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={4}
        rootStyle={styles.fieldContainer}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <ErrorMessage
        error={errors.code}
        style={styles.error}
        visible={touched.code}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  fieldContainer: {
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  cell: {
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 80,
    fontFamily: 'Nunito_400Regular',
    fontSize: 22,
    lineHeight: 80,
    overflow: 'hidden',
    textAlign: 'center',
    width: 60,
  },
  focusCell: {
    borderColor: colors.black,
    borderWidth: 2,
  },
  error: {
    marginLeft: 10,
  },
});
