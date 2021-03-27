import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import AppTextInput from './app/components/AppTextInput';

import colors from './app/config/colors';

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
    <View style={styles.container}>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="E-mail"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        placeholder="Code from e-mail"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
