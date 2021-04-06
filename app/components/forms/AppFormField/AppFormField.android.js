import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../../AppTextInput';

import colors from '../../../config/colors';

export default function AppFormField({ name, ...otherProps }) {
  const { errors, setFieldTouched, handleChange, touched } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        {...(errors[name] && touched[name]
          ? {
              error: errors[name],
              style: { borderColor: colors.danger },
              visible: touched[name],
            }
          : {})}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
