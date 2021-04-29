import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Yup from 'yup';

import { endpoint, auth } from '../api/auth';
import { AppForm, CodeInput, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import client from '../api/client';
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

  if (route.params.from === 'Register' && !data?.success) {
    return Alert.alert(
      'Warning!',
      'The code is not correct. Check your mailbox and try again, please.'
    );
  }

  route.params.email
    ? navigation.navigate(route.params.jumpTo, { email: route.params.email })
    : navigation.navigate(route.params.jumpTo);
};

export default function ConfirmScreen({ navigation, route }) {
  const { request, uploadVisible, progress, setProgress } = usePostApi(auth);

  useEffect(() => {
    if (route?.params?.from === 'Recover') {
      Notifications.presentLocalNotificationAsync({
        title: 'Code!',
        body:
          'You can input whatever code you want, remember this feature is in development. Don`t wait for code in your mailbox!',
      });
    }
  }, []);

  return (
    <Screen style={styles.screenWithHeader}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppTitle style={styles.title}>Check your Mail</AppTitle>
      <AppText style={styles.subTitle}>
        We sent a confirmation code on your e-mail
      </AppText>
      <AppForm
        initialValues={{ code: '' }}
        onSubmit={values => {
          request(
            result => handleSubmit(result, route, navigation),
            '!user_confirmRegister',
            { ...values },
            progress => setProgress(progress)
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
          client.post(endpoint, {
            '!user_sendConfirm': [{}],
          });
          route?.params?.from === 'Recover'
            ? Alert.alert(
                'Warning',
                'Sorry, but this function is in development and not avaliable now.'
              )
            : Notifications.presentLocalNotificationAsync({
                title: 'Check your mailbox!',
                body:
                  'Your new code must be there. If it doesn`t check your email input and try again.',
              });
        }}
      >
        Didn't receive our letter?
      </AppLink>
    </Screen>
  );
}
