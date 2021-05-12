import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, withInfo, value, ...otherProps }) {
  const {
    errors,
    setFieldTouched,
    setFieldValue,
    handleChange,
    values,
    touched,
  } = useFormikContext();

  useEffect(() => {
    if (value) {
      setFieldValue(name, value);
    }
  }, []);

  return (
    <View style={styles.container}>
      {value ? (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          value={values.email}
          {...otherProps}
        />
      ) : (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
        />
      )}

      <ErrorMessage
        error={errors[name]}
        style={styles.text}
        visible={touched[name]}
        withInfo={withInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    marginBottom: 8,
  },
});
