import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { email } from '../config/formFieldsProps';
import { formScreenStyles } from '../config/styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
});

export default function RecoverScreen() {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Recover Your Account</AppTitle>
      <AppText style={styles.subTitle}>
        Please type your mail so we can to send a recovery code on it
      </AppText>
      <AppForm
        initialValues={{ email: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFromField {...email} />
        <SubmitButton title="Continue" style={styles.button} />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          console.log('Tapped');
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
