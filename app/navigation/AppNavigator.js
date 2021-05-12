import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import colors from '../config/colors';
import routes from './routes';
import Screen from '../components/Screen';
import { screenStyles as styles } from '../config/styles';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

function TherapyScreen() {
  return (
    <Screen style={styles.appScreen}>
      <AppText style={styles.header}>Therapy</AppText>
    </Screen>
  );
}

function SettingsScreen() {
  return (
    <Screen style={styles.appScreen}>
      <AppText style={styles.header}>Settings</AppText>
    </Screen>
  );
}

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
        name="Therapy"
        component={TherapyScreen}
        options={{
          tabBarLabel: 'Therapy',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="doctor" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
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
