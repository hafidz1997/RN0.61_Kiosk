import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  NativeModules,
} from 'react-native';
import {Button} from '../../components/Button';
import {Loader} from '../../components/Loader';

const HideKeyboardExample = NativeModules.HideKeyboardExample;

export default class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      loading: false,
    };
  }

  // componentDidMount() {
  //   if (this.state.code) {
  //     setTimeout(() => {
  //       this.setState({loading: true});
  //     }, 2000);
  //     setTimeout(() => {
  //       this.setState({loading: false});
  //       this.props.navigation.navigate('detail');
  //     }, 5000);
  //   }
  //   // setTimeout(() => {
  //   //   this.setState({code: true, loading: true});
  //   // }, 2000);
  //   // setTimeout(() => {
  //   //   this.setState({loading: false});
  //   //   this.props.navigation.navigate('detail');
  //   // }, 5000);
  // }

  _onFocus = () => {
    // console.log('On Focus');
    HideKeyboardExample.hideSoftKeyBoard();
  };

  format = code => {
    // 98765-evi-00000000033-evi-0800-evi-2020-evi-1
    // 8992775214008
    this._onFocus();
    console.log(code);
    let c = code.split(/[-]/);
    let vendorCode = c[2];
    let vendor = parseInt(vendorCode, 10);
    console.log(vendor);
    // if (code.match(/^\d{5}\-evi\-\d{11}\-evi\-(\d{4}\-evi\-){2}\d{1}$/)) {
    if (code.match(/^\d{13}$/)) {
      console.log('match');
      this.props.navigation.navigate('detail');
    } else {
      console.log('no');
      // this.props.navigation.navigate('error');
    }
  };

  render() {
    const {loading, code} = this.state;
    console.log(code);
    if (loading) {
      return <Loader />;
    } else {
      return (
        <ScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          contentContainerStyle={styles.container}>
          <Image
            style={styles.img}
            source={require('../../assets/images/header.png')}
          />
          <Text style={styles.text}>
            Silahkan scan QR code MAP EVI dengan Barcode scanner
          </Text>
          <TextInput
            style={styles.Input}
            underlineColorAndroid="transparent"
            autoFocus={true}
            onFocus={this._onFocus}
            placeholderTextColor="grey"
            onChangeText={code => this.format(code)}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/qrcode.png')}
          />
          {/* <View style={styles.row}> */}
          {/* <Button
              onPress={() => this.props.navigation.navigate('error')}
              title="Error"
            /> */}
          {/* <Button
              onPress={() => this.props.navigation.navigate('detail')}
              title="Next"
            /> */}
          {/* </View> */}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  hiddenInput: {
    width: 0,
    height: 0,
  },
  input: {
    margin: 15,
    height: 50,
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
  text: {alignSelf: 'center', fontSize: 20, margin: 10, textAlign: 'center'},
  img: {alignSelf: 'center', margin: 20},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});
