import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Camera extends Component {
  componentDidMount() {
    let timer = setInterval(() => {
      console.log('setInterval');
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      this.takePicture();
    }, 5000);
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      console.log('captured!');
      this.props.navigation.navigate('third');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          orientation={RNCamera.Constants.Orientation.landscapeLeft}
        />
        {/* <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
