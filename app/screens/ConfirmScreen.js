import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { code } from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  code: Yup.string().required().min(4).max(6).label('Code'),
});

export default function ConfirmScreen() {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Please Check Your Mail</AppTitle>
      <AppText style={styles.subTitle}>
        We sent a confirmation code on your e-mail
      </AppText>
      <AppForm
        initialValues={{ code: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFromField {...code} />
        <SubmitButton style={styles.button} title="Confirm" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          console.log('Tapped');
        }}
      >
        Didn't receive our letter?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 35,
  },
  link: {
    marginTop: 20,
  },
});
