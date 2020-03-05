import React, {Component} from 'react';
import {ScrollView, Text, Image, TextInput, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';

export default class Second extends Component {
  state = {
    code: '',
  };
  handleCode = text => {
    this.setState({code: text});
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/header.png')}
        />
        <Text style={styles.text}>Silahkan input nomor Purchase Order :</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          // placeholder="Masukkan Kode"
          placeholderTextColor="grey"
          onChangeText={this.handleCode}
        />
        <Button
          onPress={() => this.props.navigation.navigate('camera')}
          title="Next"
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
