import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ConfirmScreen from '../screens/ConfirmScreen';
import RecoverScreen from '../screens/RecoverScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordCreateScreen from '../screens/PasswordCreateScreen';

import routes from './routes';

const Stack = createStackNavigator();

export default RegisterNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.REGISTER}
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.CONFIRM} component={ConfirmScreen} />
    <Stack.Screen
      name={routes.LOGIN}
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.RECOVER}
      component={RecoverScreen}
      options={{ title: 'Recovery' }}
    />
    <Stack.Screen
      name={routes.PASS_CREATE}
      component={PasswordCreateScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
