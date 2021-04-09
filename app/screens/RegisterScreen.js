import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import auth from '../api/auth';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';
import usePostApi from '../hooks/usePostApi';
import UploadScreen from './UploadScreen';

import { formScreenStyles } from '../config/styles';
import routes from '../navigation/routes';
import {
  firstName,
  lastName,
  email,
  password,
} from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).label('First name'),
  lastName: Yup.string().required().min(2).label('Last name'),
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

const handleSubmit = (result, navigation) => {
  const { data } = result;

  if (!data.success) {
    if (data.error) {
      return Alert.alert('Client error', data.error);
    }

    return Alert.alert(
      'Client error',
      'You have already declared an account with such e-mail! Confirm it?',
      [
        { text: 'No' },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate(routes.CONFIRM);
          },
        },
      ]
    );
  }

  navigation.navigate(routes.CONFIRM);
};

export default function RegisterScreen({ navigation }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppTitle style={styles.title}>Welcome to phel4</AppTitle>
      <AppText style={styles.subTitle}>New here? So get started!</AppText>
      <AppForm
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={(values) => {
          request(
            (result) => handleSubmit(result, navigation),
            '!user_register',
            { ...values, confirmPassword: values.password },
            (progress) => setProgress(progress)
          );
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...firstName} />
        <AppFormField {...lastName} />
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
