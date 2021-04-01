import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConfirmScreen from '../screens/ConfirmScreen';
import RecoverScreen from '../screens/RecoverScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default RegisterNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Confirm" component={ConfirmScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Recover" component={RecoverScreen} />
  </Stack.Navigator>
);
