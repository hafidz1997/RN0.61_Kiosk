import React, {Component} from 'react';
import {View, Platform, StatusBar} from 'react-native';

import {AppNavigator} from './src/config/routes';

export default class App extends Component {
  state = {
    visible: true,
  };

  async componentDidMount() {
    console.disableYellowBox = true;

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#3E50B4');
      StatusBar.setTranslucent(true);
    } else if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}
