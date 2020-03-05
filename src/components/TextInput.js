/**
 * @file TextInput
 * @version 1.0.0
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React, {Component} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';

// Third-party
import {TextField} from 'react-native-material-textfield';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Stylesheets
import {FONT_FAMILY} from '../assets/stylesheet/main';
import formStyles, {FIELD_COLOR} from '../assets/stylesheet/form';

const formStyle = formStyles.dark.textInput;
const fieldColor = FIELD_COLOR.dark;
export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.isFocused = false;
    this.inputRef = React.createRef();
    this.state = {
      value: props.value ? props.value : '',
      isError: props.isError ? props.isError : '',
    };
  }

  isFocus() {
    return this.inputRef.isFocused();
  }

  setValue(value) {
    this.setState({value});
    this.inputRef.setValue(value);
  }

  render() {
    const {
      value,
      error,
      style,
      labelTextStyle,
      secureTextEntry,
      setSecureTextEntry,
    } = this.props;
    // const inputStyle = style ? [formStyle.txt, style] : formStyle.txt;

    const labelStyle = labelTextStyle
      ? [formStyle.label, labelTextStyle]
      : formStyle.label;

    const eyeIconStyle = error
      ? formStyle.secureIconError
      : formStyle.secureIcon;

    return (
      <View style={formStyle.container}>
        <TextField
          {...this.props}
          ref={c => (this.inputRef = c)}
          value={value}
          style={formStyle.txt}
          labelTextStyle={labelStyle}
          titleTextStyle={formStyle.helpLabel}
          tintColor={fieldColor.focused}
        />
        {setSecureTextEntry ? (
          <TouchableWithoutFeedback
            onPress={() => this.props.setSecureTextEntry(!secureTextEntry)}>
            <Image
              style={eyeIconStyle}
              source={
                this.props.secureTextEntry === true
                  ? require('../assets/icons/eye-slash.png')
                  : require('../assets/icons/eye.png')
              }
            />
          </TouchableWithoutFeedback>
        ) : error ? (
          <FontAwesome
            name="exclamation-triangle"
            style={formStyle.iconError}
          />
        ) : null}
      </View>
    );
  }
}
