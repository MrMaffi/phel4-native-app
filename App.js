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

import AppButton from './app/components/AppButton';
import AppTextInput from './app/components/AppTextInput';
import AppTitle from './app/components/AppTitle';

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
      <AppTitle style={{ marginBottom: 60 }}>Welcome to phel4</AppTitle>
      <AppTextInput icon="email" placeholder="E-mail" />
      <AppButton
        style={{ marginTop: 35 }}
        onPress={() => {
          console.log('Tapped');
        }}
        title="Click me"
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
