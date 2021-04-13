const basic = {
  autoCapitalize: 'none',
  autoCorrect: false,
};

const firstName = {
  ...basic,
  title: 'Your first name',
  name: 'firstName',
};

const lastName = {
  ...basic,
  title: 'Your last name',
  name: 'lastName',
};

const email = {
  ...basic,
  keyboardType: 'email-address',
  title: 'E-mail',
  name: 'email',
};

const password = {
  ...basic,
  name: 'password',
  title: 'Password',
  secureTextEntry: true,
};

const confirmPassword = {
  ...password,
  name: 'confirmPassword',
  title: 'Confirm password',
};

export { firstName, lastName, email, password, confirmPassword };
