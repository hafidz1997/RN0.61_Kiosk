/**
 * @file Checkbox
 * @version 1.0.0
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Stylesheets
import formStyles from '../assets/stylesheet/form';
const formStyle = formStyles.dark.checkbox;
export const CheckBox = props => (
  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    {props.checked ? (
      <TouchableWithoutFeedback onPress={() => props.onChecked()}>
        <View style={formStyle.active}>
          <Ionicons name="md-checkmark" style={{fontSize: 14, color: '#fff'}} />
        </View>
      </TouchableWithoutFeedback>
    ) : (
      <TouchableWithoutFeedback onPress={() => props.onChecked()}>
        <View style={props.error ? formStyle.error : formStyle.default} />
      </TouchableWithoutFeedback>
    )}
    <View style={{justifyContent: 'center'}}>
      <Text style={formStyle.label}>{props.label}</Text>
    </View>
  </View>
);
