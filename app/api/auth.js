import client from './client';

const endpoint = '/ua/data';

const login = (email, password, onUploadProgress) => {
  return client.post(
    endpoint,
    { '!user_login': [{ email, password }] },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};

export default {
  login,
};
