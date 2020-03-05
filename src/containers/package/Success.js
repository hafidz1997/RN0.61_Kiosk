import React, {Component} from 'react';
import {ScrollView, Text, Image, View, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';

export default class Success extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/header.png')}
        />
        <Text style={styles.text}>
          Silahkan tempel 1 lembar No. Urut Surat & Paket di amplop Surat /
          Paket yang akan diserahkan ke MAP
        </Text>
        <Text style={styles.text}>
          Simpan lembar ke-2 No. Urut Surat & Paket sebagai bukti penerimaan
          Surat / Paket oleh penerima
        </Text>
        <Text style={styles.text}>
          Letakkan Surat / Paket ke dalam "Dropbox Surat & Paket"
        </Text>
        <Text style={styles.text}>
          Terima kasih sudah menggunakan FNB Kiosk!
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('initialize')}
          title="Home"
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
