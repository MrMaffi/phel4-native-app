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
          <View key={index}>
            <Text style={styles.cell} onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
            <View style={styles.field} />
          </View>
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
    height: 55,
    fontFamily: 'Nunito_400Regular',
    fontSize: 22,
    lineHeight: 55,
    overflow: 'hidden',
    textAlign: 'center',
    width: 60,
  },
  field: {
    backgroundColor: colors.black,
    height: 2,
    width: 60,
  },
  error: {
    marginLeft: 10,
  },
});
