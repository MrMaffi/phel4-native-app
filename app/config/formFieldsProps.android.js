const basic = {
  autoCapitalize: 'none',
  autoCorrect: false,
};

const name = {
  ...basic,
  title: 'Your name',
  name: 'name',
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

export { name, email, password };
