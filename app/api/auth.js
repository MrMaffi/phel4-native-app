import client from './client';

const endpoint = '/ua/data';

const auth = (key, data, onUploadProgress) => {
  return client.post(
    endpoint,
    { [key]: [{ ...data }] },
    {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    }
  );
};

export default auth;
