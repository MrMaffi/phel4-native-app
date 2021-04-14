import React from 'react';
import { Alert } from 'react-native';
import * as Yup from 'yup';

import auth from '../api/auth';
import { AppForm, CodeInput, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';
import usePostApi from '../hooks/usePostApi';
import UploadScreen from './UploadScreen';

import { formScreenStyles as styles } from '../config/styles';

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/^\d+$/, 'Code should have digits only')
    .required()
    .min(6)
    .label('Code'),
});

const handleSubmit = (result, route, navigation) => {
  const { data } = result;

  if (data && !data.success) {
    return Alert.alert('Client error', data.error);
  }

  route && route.params
    ? navigation.navigate(route.params.jumpTo)
    : Alert.alert('Welcome', 'Your new account has been created successfully!');
};

export default function ConfirmScreen({ navigation, route }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  return (
    <Screen style={styles.screenWithHeader}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppTitle style={styles.title}>Check your Mail</AppTitle>
      <AppText style={styles.subTitle}>
        We sent a confirmation code on your e-mail
      </AppText>
      <AppForm
        initialValues={{ code: '' }}
        onSubmit={(values) => {
          request(
            (result) => handleSubmit(result, route, navigation),
            '!user_confirmRegister',
            values,
            (progress) => setProgress(progress)
          );
        }}
        validationSchema={validationSchema}
      >
        <CodeInput />
        <SubmitButton title="Confirm" style={styles.button} />
      </AppForm>
      <AppLink
        style={styles.subLink}
        onPress={() => {
          console.log('Tapped');
        }}
      >
        Didn't receive our letter?
      </AppLink>
    </Screen>
  );
}
