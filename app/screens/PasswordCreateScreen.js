import React from 'react';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { screenStyles as styles } from '../config/styles';
import routes from '../navigation/routes';
import { newPassword, confirmPassword } from '../config/formFieldsProps';
import { Alert } from 'react-native';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required()
    .min(6)
    .label('Password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Not correct format'
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .label('Confirm password'),
});

export default function PasswordCreateScreen({ navigation }) {
  return (
    <Screen style={[styles.screen, { marginBottom: 30, marginTop: 10 }]}>
      <AppTitle style={styles.title}>Create password</AppTitle>
      <AppText style={styles.subTitle}>Come up with a new password</AppText>
      <AppForm
        initialValues={{ newPassword: '', confirmPassword: '' }}
        onSubmit={values => {
          console.log(values);
          return Alert.alert(
            'Thanks for testing!',
            'We appreciate your interest in new features. This will help us to make our app better.',
            [
              {
                text: 'Return back',
                onPress: () => {
                  navigation.navigate(routes.LOGIN);
                },
              },
            ]
          );
        }}
        validationSchema={validationSchema}
      >
        <AppFormField {...newPassword} />
        <AppFormField {...confirmPassword} />
        <SubmitButton style={styles.button} title="Change password" />
      </AppForm>
      <AppLink
        returnIcon
        style={styles.subLink}
        onPress={() => {
          navigation.navigate(routes.LOGIN);
        }}
      >
        Cansel recovery
      </AppLink>
    </Screen>
  );
}
