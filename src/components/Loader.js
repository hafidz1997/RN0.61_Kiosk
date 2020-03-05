import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#3E50B4" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
