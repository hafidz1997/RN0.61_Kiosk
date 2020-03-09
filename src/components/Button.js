import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

export const Button = props => (
  <TouchableWithoutFeedback {...props}>
    <View style={styles.btn}>
      <Text style={styles.btnTxt}>{props.title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    marginTop: 20,
    padding: 13,
    paddingHorizontal: 30,
    backgroundColor: '#DDDDDD',
    borderWidth: 2,
    borderColor: 'black',
  },
  btnTxt: {alignSelf: 'center', fontSize: 15, fontWeight: 'bold'},
});
