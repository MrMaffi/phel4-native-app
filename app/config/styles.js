import { StyleSheet } from 'react-native';

import colors from './colors';

const formScreenStyles = StyleSheet.create({
  screen: {
    marginBottom: 60,
    marginTop: 40,
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
});

export { formScreenStyles };
