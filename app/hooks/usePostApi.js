import { useState } from 'react';
import { Alert } from 'react-native';

export default usePostApi = (apiFunc) => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const request = async (...args) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await apiFunc(...args);

    setTimeout(() => {
      setUploadVisible(false);
    }, 200);

    setTimeout(() => {
      if (!result.ok) {
        return Alert.alert(
          'Server error',
          'Oops! Something goes wrong. Try again later!'
        );
      }

      const { data } = result;

      if (!data.success) {
        return Alert.alert('Client error', data.error);
      }

      Alert.alert('Welcome', 'You have successfully logged in!');
    }, 300);
  };

  return {
    request,
    uploadVisible,
    progress,
    setProgress,
  };
};
