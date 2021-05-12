import { Dimensions, StyleSheet } from 'react-native';

import colors from './colors';

const screenStyles = StyleSheet.create({
  screen: {
    marginBottom: 60,
    minHeight: Dimensions.get('window').height,
    marginTop: 40,
    justifyContent: 'center',
  },
  appScreen: {
    minHeight: Dimensions.get('window').height - 40,
    marginVertical: 40,
  },
  screenWithHeader: {
    marginBottom: 50,
    minHeight: Dimensions.get('window').height - 130,
    marginTop: 15,
    justifyContent: 'center',
  },
  link: { alignSelf: 'flex-end' },
  header: {
    color: colors.lightGray,
    fontSize: 29,
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    marginBottom: 6,
  },
  subTitle: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 21,
    marginBottom: 30,
  },
  button: {
    marginTop: 50,
  },
  subLink: {
    alignSelf: 'center',
    marginTop: 30,
  },
});

export { screenStyles };
