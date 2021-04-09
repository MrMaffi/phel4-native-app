const basic = {
  autoCapitalize: 'none',
  autoCorrect: false,
  returnKeyType: 'done',
};

const firstName = {
  ...basic,
  name: 'firstName',
  placeholder: 'What`s your name?',
};

const lastName = {
  ...basic,
  name: 'lastName',
  placeholder: 'Your last name?',
};

const email = {
  ...basic,
  keyboardType: 'email-address',
  icon: 'email',
  name: 'email',
  placeholder: 'E-mail',
  textContentType: 'emailAddress',
};

const password = {
  ...basic,
  icon: 'lock',
  name: 'password',
  placeholder: 'Password',
  secureTextEntry: true,
  textContentType: 'password',
};

export { firstName, lastName, email, password };
