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

import { email, password } from '../config/formFieldsProps';
import { formScreenStyles } from '../config/styles';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string().required().min(6).label('Password'),
});

const handleSubmit = (result) => {
  const { data } = result;

  if (!data.success) {
    return Alert.alert('Client error', data.error);
  }

  Alert.alert('Welcome', 'You have successfully logged in!');
};

export default function LoginScreen({ navigation }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppTitle style={styles.title}>Log In to phel4</AppTitle>
      <AppText style={styles.subTitle}>Missed? So login and welcome!</AppText>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          request(handleSubmit, '!user_login', values, (progress) =>
            setProgress(progress)
          );
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...email} />
        <AppFormField {...password} />
        <SubmitButton style={styles.button} title="Log in" />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Don`t have account?
      </AppLink>
      <AppLink
        onPress={() => {
          navigation.navigate(routes.RECOVER);
        }}
      >
        Forgot password?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ...formScreenStyles,
});
