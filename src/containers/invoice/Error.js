import React, {Component} from 'react';
import {ScrollView, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';

export default class Error extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/header.png')}
        />
        <Text style={styles.text}>
          Mohon hubungi Finance Division untuk validasi lebih lanjut.
        </Text>
        <Text style={styles.text}>Mohon maaf untuk ketidak nyamanannya.</Text>
        <Text style={styles.text}>Extention Number : XXXXXX</Text>
        <Image
          style={styles.img}
          source={require('../../assets/images/error.png')}
        />
        <Button
          onPress={() => this.props.navigation.navigate('first')}
          title="Selesai"
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
