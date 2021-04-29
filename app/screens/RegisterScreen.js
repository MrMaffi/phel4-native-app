import React from 'react';
import { Alert, Text } from 'react-native';
import * as Yup from 'yup';

import { auth } from '../api/auth';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';
import usePostApi from '../hooks/usePostApi';
import UploadScreen from './UploadScreen';

import { formScreenStyles as styles } from '../config/styles';
import routes from '../navigation/routes';
import {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
} from '../config/formFieldsProps';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).label('First name'),
  lastName: Yup.string().required().label('Last name'),
  email: Yup.string().required().email().label('E-mail'),
  password: Yup.string()
    .required()
    .min(6)
    .label('Password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Not correct format'
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .label('Confirm password'),
});

const handleSubmit = (result, navigation, email) => {
  const { data } = result;

  if (!data.success) {
    switch (data.error) {
      case 'aws': {
        return Alert.alert(
          'Warning!',
          'You have already declared an account with such email. Confirm it?',
          [
            { text: 'No' },
            {
              text: 'Yes',
              onPress: () => {
                navigation.push(routes.CONFIRM, {
                  from: 'Register',
                  jumpTo: routes.LOGIN,
                  email,
                });
              },
            },
          ]
        );
      }
      case 'user_already_exists': {
        return Alert.alert(
          'Warning!',
          'Sorry, but a user with such email already exists.'
        );
      }
      default: {
        return Alert.alert(
          'Oops!',
          'Unknown error. Sorry but we unable to set the kind of error it is. Try again later, please.'
        );
      }
    }
  }

  navigation.push(routes.CONFIRM, {
    from: 'Register',
    jumpTo: routes.LOGIN,
    email,
  });
};

export default function RegisterScreen({ navigation }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  return (
    <Screen style={styles.screen}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppLink
        style={styles.link}
        onPress={() => {
          navigation.navigate(routes.LOGIN);
        }}
      >
        Log in?
      </AppLink>
      <AppText style={styles.header}>Sign up</AppText>
      <AppTitle style={styles.title}>Hello there</AppTitle>
      <Text style={styles.subTitle}>Please sign up</Text>
      <AppForm
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => {
          request(
            result => handleSubmit(result, navigation, values.email),
            '!user_register',
            { ...values },
            progress => setProgress(progress)
          );
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...firstName} />
        <AppFormField {...lastName} />
        <AppFormField {...email} />
        <AppFormField {...password} />
        <AppFormField {...confirmPassword} />
        <SubmitButton style={styles.button} title="Create account" />
      </AppForm>
    </Screen>
  );
}
