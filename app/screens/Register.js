import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppTitle from '../components/AppTitle';
import ErrorMessage from '../components/forms/ErrorMessage';

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
        {({ errors, handleChange, handleSubmit, setFieldTouched, touched }) => (
          <>
            <View style={styles.container}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                onBlur={() => setFieldTouched('name')}
                onChangeText={handleChange('name')}
                placeholder="What`s your name?"
              />
              <ErrorMessage error={errors.name} visible={touched.name} />
            </View>
            <View style={styles.container}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                placeholder="E-mail"
                textContentType="emailAddress"
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
            </View>
            <View style={styles.container}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
            </View>
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
  container: {
    width: '100%',
  },
  button: {
    marginTop: 35,
  },
  link: {
    marginTop: 35,
    textDecorationLine: 'underline',
  },
});
