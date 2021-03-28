import React from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppFromField from '../components/forms/AppFromField';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

export default function Register() {
  return (
    <>
      <AppTitle>Welcome to phel4</AppTitle>
      <AppText style={styles.subTitle}>New here? So get started!</AppText>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
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
            <AppButton
              onPress={handleSubmit}
              style={styles.button}
              title="Log in"
            />
          </>
        )}
      </Formik>
      <AppText style={styles.link}>Already a member?</AppText>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 22,
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
