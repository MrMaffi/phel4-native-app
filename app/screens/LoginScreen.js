import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFromField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { formScreenStyles } from '../config/styles';
import { email, password } from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

export default function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Log In to phel4</AppTitle>
      <AppText style={styles.subTitle}>Missed? So login and welcome!</AppText>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFromField {...email} />
        <AppFromField {...password} />
        <SubmitButton style={styles.button} title="Log in" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.navigate('Recover');
        }}
      >
        Forgot password?
      </AppLink>
      <AppLink
        onPress={() => {
          navigation.navigate('Register');
        }}
      >
        Don`t have account?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ...formScreenStyles,
});
