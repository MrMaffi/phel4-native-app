import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import SettingsScreen from '../screens/SttingsScreen';
import TherapyScreen from '../screens/TherapyScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import colors from '../config/colors';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.lightGray,
      }}
    >
      <Tab.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.THERAPY}
        component={TherapyScreen}
        options={{
          tabBarLabel: 'Therapy',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="doctor" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
