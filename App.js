import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, SubmitButton } from './app/components/forms';
import CodeInput from './app/components/forms/CodeInput';
import Screen from './app/components/Screen';

const validationSchema = Yup.object().shape({
  code: Yup.string().required().min(4).label('Code'),
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ code: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <CodeInput />
        <SubmitButton title="Confirm" style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 35,
  },
});
