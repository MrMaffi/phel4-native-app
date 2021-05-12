import React from 'react';
import { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import RegisterNavigator from './app/navigation/RegisterNavigator';

import client from './app/api/client';
import { endpoint } from './app/api/auth';

const getDashboard = async setHasDashboard => {
  const response = await client.post(endpoint, { '!user_getDashboard': [] });
  setHasDashboard(response);
};

export default function App() {
  const [hasDashboard, setHasDashboard] = useState({});

  useEffect(() => {
    getDashboard(setHasDashboard);
  }, []);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (hasDashboard?.status === 200) {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <RegisterNavigator />
    </NavigationContainer>
  );
}
