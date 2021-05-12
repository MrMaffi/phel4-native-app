import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import ButtonWithIco from '../components/ButtonWithIco';
import Screen from '../components/Screen';

import colors from '../config/colors';
import { screenStyles } from '../config/styles';

export default function SttingsScreen() {
  return (
    <Screen style={screenStyles.appScreen}>
      <AppText style={screenStyles.header}>Settings</AppText>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="doctor" size={32} />
        </View>
        <View>
          <AppText style={styles.userName}>Dr Smit</AppText>
          <Text style={styles.email}>drsmit@gmail.com</Text>
        </View>
      </View>
      <ButtonWithIco
        title="Log out"
        iconName="logout"
        backgroundColor={colors.danger}
        style={styles.button}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    marginRight: 10,
    width: 50,
  },
  userName: {
    fontSize: 20,
  },
  email: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
  button: {
    marginTop: 60,
  },
});
