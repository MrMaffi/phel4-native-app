import React from 'react';

import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';
import { screenStyles as styles } from '../config/styles';

export default function WelcomeScreen() {
  return (
    <Screen style={styles.appScreen}>
      <AppText style={styles.header}>Home</AppText>
      <AppTitle style={styles.title}>Greetings</AppTitle>
    </Screen>
  );
}
