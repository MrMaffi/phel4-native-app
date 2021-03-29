import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { name, email, password } from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

export default function Register() {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Welcome to phel4</AppTitle>
      <AppText style={styles.subTitle}>New here? So get started!</AppText>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFromField {...name} />
        <AppFromField {...email} />
        <AppFromField {...password} />
        <SubmitButton style={styles.button} title="Log in" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          console.log('Tapped');
        }}
      >
        Already a member?
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
  },
  button: {
    marginTop: 35,
  },
  link: {
    marginTop: 20,
  },
});
