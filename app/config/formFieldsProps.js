const basic = {
  autoCapitalize: 'none',
  autoCorrect: false,
};

const name = {
  ...basic,
  icon: 'account',
  name: 'name',
  placeholder: 'What`s your name?',
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

const code = {
  ...basic,
  keyboardType: 'numeric',
  name: 'code',
  placeholder: 'Code from e-mail',
};

export { name, email, password, code };
