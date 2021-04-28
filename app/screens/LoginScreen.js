import React from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Yup from 'yup';

import { auth } from '../api/auth';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';
import usePostApi from '../hooks/usePostApi';
import UploadScreen from './UploadScreen';

import { email, password } from '../config/formFieldsProps';
import { formScreenStyles as styles } from '../config/styles';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string()
    .required()
    .min(6)
    .label('Password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Not correct format'
    ),
});

const handleSubmit = result => {
  const { data } = result;

  console.log(data);

  if (!data.success) {
    switch (data.error) {
      case 'user_is_already_logged_in':
        return Alert.alert(
          'Warning!',
          'Sorry, but a user with such email has already logged in.'
        );
      case 'invalid_login_or_password':
        return Alert.alert(
          'Warning!',
          'Login or password is not correct. Please check and try again.'
        );
      default:
        return Alert.alert(
          'Oops!',
          'Unknown error. Sorry but we unable to set the kind of error it is. Try again later, please.'
        );
    }
  }

  Notifications.presentLocalNotificationAsync({
    title: 'Welcome back!',
    body: 'You have successfully logged in.',
  });
};

export default function LoginScreen({ navigation }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.navigate(routes.REGISTER);
        }}
      >
        Sign up?
      </AppLink>
      <AppTitle style={styles.header}>Log in</AppTitle>
      <AppTitle style={styles.title}>Welcome back</AppTitle>
      <AppText style={styles.subTitle}>Please log in</AppText>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          request(handleSubmit, '!user_login', values, progress =>
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
        style={styles.subLink}
        onPress={() => {
          navigation.navigate(routes.RECOVER);
        }}
      >
        Forgot password?
      </AppLink>
    </Screen>
  );
}
