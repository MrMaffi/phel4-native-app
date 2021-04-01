import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConfirmScreen from '../screens/ConfirmScreen';
import RecoverScreen from '../screens/RecoverScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

import routes from './routes';

const Stack = createStackNavigator();

export default RegisterNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={routes.CONFIRM} component={ConfirmScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.RECOVER} component={RecoverScreen} />
  </Stack.Navigator>
);
