import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

export default function SubmitButton({ ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={handleSubmit} {...otherProps} />;
}
