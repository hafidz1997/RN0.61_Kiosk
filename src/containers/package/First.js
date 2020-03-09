import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Picker,
} from 'react-native';
import {Button} from '../../components/Button';

export default class First extends Component {
  state = {
    code: '',
    jasa: '',
  };
  handleCode = text => {
    this.setState({code: text});
  };
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/header.png')}
        />
        <Text style={styles.text}>Silahkan isi kolom kosong di bawah ini</Text>
        <View style={styles.row}>
          <Text style={[styles.text, {fontSize: 15}]}>Jasa Pengiriman</Text>
          {/* <TextInput
            style={[styles.input, {width: '30%'}]}
            underlineColorAndroid="transparent"
            placeholder="Jasa Pengiriman"
            placeholderTextColor="grey"
            onChangeText={this.handleCode}
          /> */}
          <Picker
            selectedValue={this.state.jasa}
            style={[styles.input, {width: '30%'}]}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({jasa: itemValue})
            }>
            <Picker.Item label="JNE" value="jne" />
            <Picker.Item label="TIKI" value="tiki" />
            <Picker.Item label="siCepat" value="sicepat" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Button
            // onPress={() => this.props.navigation.navigate('first')}
            title="Surat"
          />
          <Button
            // onPress={() => this.props.navigation.navigate('print')}
            title="Paket"
          />
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={[styles.text, {fontSize: 15}]}>Nama Penerima</Text>
          <TextInput
            style={[styles.input, {width: '30%'}]}
            underlineColorAndroid="transparent"
            placeholder="Nama Penerima"
            placeholderTextColor="grey"
            onChangeText={this.handleCode}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('print2')}
          title="Print"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  },
});
