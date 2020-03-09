import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export default class Initialize extends Component {
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/images/header.png')}
        />
        <Text style={[styles.text, {fontSize: 30, fontWeight: 'bold'}]}>
          SELAMAT DATANG DI FNB KIOSK
        </Text>
        <Text style={styles.text}>Silahkan pilih opsi</Text>

        <View style={styles.row}>
          <Button
            onPress={() => this.props.navigation.navigate('first')}
            title="Drop Vendor Invoice"
          />
          <Button
            onPress={() => this.props.navigation.navigate('package')}
            title="Drop Surat & Paket"
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('package')}
          title="Cancel Invoice"
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
  row: {flexDirection: 'row'},
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
