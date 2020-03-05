import React, {Component} from 'react';
import {ScrollView, Text, Image, View, StyleSheet} from 'react-native';
import {Button} from '../../components/Button';
import {Loader} from '../../components/Loader';

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({code: true, loading: true});
    }, 2000);

    setTimeout(() => {
      this.setState({loading: false});
      this.props.navigation.navigate('second');
    }, 5000);
  }

  render() {
    const {loading} = this.state;
    console.log(loading);
    if (loading) {
      return <Loader />;
    } else {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Button
            onPress={() => this.props.navigation.navigate('initialize')}
            title="Home"
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/header.png')}
          />
          <Text style={styles.text}>
            Silahkan scan QR code MAP EVI dengan Barcode scanner
          </Text>
          <Image
            style={styles.img}
            source={require('../../assets/images/qrcode.png')}
          />
          <View style={styles.row}>
            <Button
              onPress={() => this.props.navigation.navigate('error')}
              title="Error"
            />
            {/* <Button
              onPress={() => this.props.navigation.navigate('second')}
              title="Next"
            /> */}
          </View>
        </ScrollView>
      );
    }
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
});
