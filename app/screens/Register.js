import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

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
        <AppFromField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="What`s your name?"
        />
        <AppFromField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
        />
        <AppFromField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton style={styles.button} title="Log in" />
      </AppForm>
      <AppText style={styles.link}>Already a member?</AppText>
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
    marginTop: 35,
    textDecorationLine: 'underline',
  },
});
