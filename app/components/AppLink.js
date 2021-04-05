import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';

import colors from '../config/colors';

export default function AppLink({ children, returnIcon, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {returnIcon && (
          <MaterialIcons name="logout" size={18} style={styles.icon} />
        )}
        <AppText
          style={[
            styles.link,
            { textDecorationLine: returnIcon ? 'none' : 'underline' },
          ]}
        >
          {children}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
  },
  link: {
    color: colors.black,
    fontSize: 18,
  },
  icon: {
    marginRight: 6,
    transform: [{ rotate: '180deg' }],
  },
});
