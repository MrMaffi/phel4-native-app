import React from 'react';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { email } from '../config/formFieldsProps';
import { formScreenStyles as styles } from '../config/styles';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
});

export default function RecoverScreen({ navigation }) {
  return (
    <Screen style={styles.screenWithHeader}>
      <AppTitle style={styles.title}>Recover account</AppTitle>
      <AppText numberOfLines={2} style={styles.subTitle}>
        Please type your mail so we can send a recovery code on it
      </AppText>
      <AppForm
        initialValues={{ email: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(routes.CONFIRM, { jumpTo: routes.PASS_CREATE });
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...email} />
        <SubmitButton title="Continue" style={styles.button} />
      </AppForm>
    </Screen>
  );
}
