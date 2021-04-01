import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { formScreenStyles } from '../config/styles';
import routes from '../navigation/routes';
import { password } from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required().min(6).label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .label('Confirm password'),
});

export default function PasswordCreateScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Create new Password</AppTitle>
      <AppText style={styles.subTitle}>Come up with a new password</AppText>
      <AppForm
        initialValues={{ newPassword: '', confirmPassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFromField
          {...password}
          name={'newPassword'}
          placeholder="New password"
        />
        <AppFromField
          {...password}
          name={'confirmPassword'}
          placeholder="Confirm password"
        />
        <SubmitButton style={styles.button} title="Confirm" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Cansel recovery?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ...formScreenStyles,
});
