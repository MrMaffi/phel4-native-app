import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { formScreenStyles } from '../config/styles';
import routes from '../navigation/routes';
import { name, email, password } from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

export default function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Welcome to phel4</AppTitle>
      <AppText style={styles.subTitle}>New here? So get started!</AppText>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate(routes.CONFIRM);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...name} />
        <AppFormField {...email} />
        <AppFormField {...password} />
        <SubmitButton style={styles.button} title="Create account" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.navigate(routes.LOGIN);
        }}
      >
        Already a member?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ...formScreenStyles,
});
