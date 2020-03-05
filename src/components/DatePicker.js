/**
 * @file Date Picker
 * @version 1.0.0
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Helper functions
import {datePicker, formatDate} from '../helpers/helper';

// Stylesheets
import formStyles from '../assets/stylesheet/form';
const formStyle = formStyles.dark.datePicker;
export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.isFocused = false;
    this.inputRef = React.createRef();
    this.state = {
      value: props.value ? props.value : '',
      error: props.error ? props.error : '',
    };
  }

  pickDate = async value => {
    var currentDate = new Date();
    if (value) {
      var t = value.split(/[- :]/);
      currentDate = new Date(Date.UTC(t[2], t[1] - 1, t[0]));
    }

    const pickedDate = await datePicker(currentDate);
    if (pickedDate) {
      this.props.onSelect(formatDate(new Date(pickedDate), 'DD-MM-YYYY'));
    }
  };

  render() {
    const {value, error, fixedLabels} = this.props;
    return (
      <View style={formStyle.container}>
        <Text style={formStyle.label}>{value ? this.props.label : null}</Text>
        <TouchableOpacity
          onPress={() => this.pickDate(value)}
          style={error ? formStyle.error : formStyle.default}>
          {value ? (
            <Text style={formStyle.txt}>{value}</Text>
          ) : (
            <Text style={error ? formStyle.txtError : formStyle.txt}>
              {this.props.label}
            </Text>
          )}
          <Image
            source={require('../assets/icons/calendar.png')}
            style={formStyle.icon}
          />
        </TouchableOpacity>
        {error ? <Text style={formStyle.labelError}>{error}</Text> : null}
      </View>
    );
  }
}
