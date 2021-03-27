import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppTitle from '../components/AppTitle';

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
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              onChangeText={handleChange('name')}
              placeholder="What`s your name?"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              placeholder="E-mail"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
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
