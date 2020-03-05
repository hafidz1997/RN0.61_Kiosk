import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';

export default class Third extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/header.png')}
        />
        <Text style={styles.text}>0800 - PT. SARI COFFEE INDONESIA</Text>
        <Text style={styles.text}>Vendor code : 33</Text>
        <Text style={styles.text}>Invoice # 98765</Text>
        <Text style={styles.text}>Purchase Order # 4503769554</Text>

        <View style={styles.row}>
          <Button
            onPress={() => this.props.navigation.navigate('first')}
            title="Koreksi"
          />
          <View style={{width: '30%'}} />
          <Button
            onPress={() => this.props.navigation.navigate('print')}
            title="print"
          />
        </View>
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
