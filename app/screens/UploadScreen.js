import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

export default function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          color={colors.secondary}
          progress={progress}
          width={200}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
