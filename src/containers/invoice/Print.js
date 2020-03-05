import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Button} from '../../components/Button';

export default class RNPrintExample extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Print</Text>
        <Button
          onPress={() => this.props.navigation.navigate('success')}
          title="Success"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {alignSelf: 'center', fontSize: 20, margin: 10, textAlign: 'center'},
  img: {alignSelf: 'center', margin: 20},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  input: {
    margin: 15,
    height: 50,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
