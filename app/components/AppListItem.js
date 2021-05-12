import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function AppListItem({
  onPress = () => console.log('Tapped'),
  iconName,
  text,
  backgroundColor = colors.secondary,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={[styles.iconBox, { backgroundColor }]}>
            <MaterialCommunityIcons
              name={iconName}
              size={26}
              color={colors.white}
            />
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>

        <MaterialCommunityIcons name="arrow-right" size={18} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 7,
    justifyContent: 'space-between',
    width: '90%',
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBox: {
    alignItems: 'center',
    borderRadius: 12,
    height: 38,
    justifyContent: 'center',
    width: 38,
    marginRight: 10,
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
  },
});
