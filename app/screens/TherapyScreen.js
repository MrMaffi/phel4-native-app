import React from 'react';
import { StyleSheet } from 'react-native';
import AppListItem from '../components/AppListItem';

import AppText from '../components/AppText';
import AppTitle from '../components/AppTitle';
import Screen from '../components/Screen';

import colors from '../config/colors';
import { screenStyles } from '../config/styles';

export default function TherapyScreen() {
  return (
    <Screen style={screenStyles.appScreen}>
      <AppText style={screenStyles.header}>Therapy</AppText>
      <AppTitle style={screenStyles.title}>Welcome to office</AppTitle>
      <AppText style={styles.subTitle}>Manage your timetable</AppText>
      <AppTitle style={styles.sectionTitle}>Upcoming</AppTitle>
      <AppListItem iconName="calendar" text="My schedule" />
      <AppListItem iconName="file-document" text="My bids" />
      <AppTitle style={styles.sectionTitle}>Bids requiring attention</AppTitle>
      <AppListItem
        iconName="file-document"
        text="My bids"
        backgroundColor={colors.danger}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 60,
  },
});
