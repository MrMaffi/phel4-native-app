import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function AppLink({ children, returnIcon, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        {returnIcon && (
          <MaterialIcons name="logout" size={18} style={styles.icon} />
        )}
        <Text
          style={[
            styles.link,
            { textDecorationLine: returnIcon ? 'none' : 'underline' },
          ]}
        >
          {children}
        </Text>
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
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
  },
  icon: {
    marginRight: 6,
    transform: [{ rotate: '180deg' }],
  },
});
