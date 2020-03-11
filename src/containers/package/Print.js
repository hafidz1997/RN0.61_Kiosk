import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, NativeModules} from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

import {Button} from '../../components/Button';

const PrinterManager = NativeModules.PrinterManager;
const imageType = 'png';
const imagePath = `${RNFS.ExternalDirectoryPath}/image.${imageType}`;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  captureView = async () => {
    this.refs.viewShot.capture().then(uri => {
      RNFS.moveFile(uri, imagePath)
        .then(success => {
          console.log('FILE MOVED!');
          //this.printViewShot(imagePath)
        })
        .catch(err => {
          console.log(err.message);
        });
    });
  };

  printViewShot = imagePath => {
    PrinterManager.printImage(imagePath, res => {
      console.log(res);
      if (res === 'connected') {
        //do something
      } else {
        //do something
      }
    });
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={styles.container}>
        <ViewShot ref="viewShot" options={{format: 'jpg', quality: 0.9}}>
          <View style={{marginTop: 500}}>
            <Text>Printtt</Text>
          </View>
        </ViewShot>
        <View style={styles.row}>
          <Button title="Connect" onPress={() => PrinterManager.connect()} />
          <Button
            title="Disconnect"
            onPress={() => PrinterManager.disconnect()}
          />
        </View>
        <View style={styles.row}>
          <Button
            title="Print Text"
            onPress={() => PrinterManager.printText('Hello')}
          />
          <Button
            title="Print view shot"
            onPress={() => this.printViewShot(imagePath)}
          />
          <Button title="Capture" onPress={() => this.captureView()} />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('success2')}
          title="Next"
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
  text: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  img: {alignSelf: 'center', margin: 20},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});
