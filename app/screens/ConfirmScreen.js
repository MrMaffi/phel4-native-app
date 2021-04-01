import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, CodeInput, SubmitButton } from '../components/forms';
import AppLink from '../components/AppLink';
import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import { formScreenStyles } from '../config/styles';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/^\d+$/, 'Code should have digits only')
    .required()
    .min(4)
    .label('Code'),
});

export default function ConfirmScreen({ navigation, route }) {
  return (
    <Screen style={styles.screen}>
      <AppTitle>Please Check Your Mail</AppTitle>
      <AppText style={styles.subTitle}>
        We sent a confirmation code on your e-mail
      </AppText>
      <AppForm
        initialValues={{ code: '' }}
        onSubmit={(values) => {
          console.log(values);
          {
            route.params && navigation.navigate(route.params.jumpTo);
          }
        }}
        validationSchema={validationSchema}
      >
        <CodeInput />
        <SubmitButton title="Confirm" style={styles.button} />
      </AppForm>
      <AppLink
        style={styles.link}
        onPress={() => {
          console.log('Tapped');
        }}
      >
        Didn't receive our letter?
      </AppLink>
      <AppLink
        onPress={() => {
          navigation.goBack();
        }}
      >
        Return back?
      </AppLink>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ...formScreenStyles,
});
