/**
 * @file Picker
 * @version 1.0.0
 * @author Anne Hasan <lutfiane.fadila@gmail.com>
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import equal from 'fast-deep-equal';

// Helper functions
import {searchObj} from '../helpers/helper';

// Custom components
import Searchbar from './Searchbar';

// Stylesheets
import {FONT_FAMILY} from '../assets/stylesheet/main';
import formStyles from '../assets/stylesheet/form';
const formStyle = formStyles.dark.picker;
export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.fullOpt = props.options ? props.options : []; // untuk backup
    this.state = {
      visible: false,
      isFocused: false,
      q: null,
      selectedValue: props.selectedValue ? props.selectedValue : null,
      options: props.options ? props.options : [],
      error: props.error,
    };
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props, prevProps)) {
      this.fullOpt = this.props.options ? this.props.options : [];
      this.setState({
        selectedValue: this.props.selectedValue
          ? this.props.selectedValue
          : null,
        options: this.props.options ? this.props.options : [],
        error: this.props.error,
      });
    }
  }

  search(q) {
    var data = this.fullOpt;
    var filteredData = [];
    for (var key in data) {
      if (
        data[key].name
          .toString()
          .toLowerCase()
          .indexOf(q.toLowerCase()) > -1
      ) {
        filteredData.push(data[key]);
      }
    }

    this.setState({options: filteredData});
  }

  select(id) {
    this.closePan();
    this.setState({
      selectedValue: id,
      options: this.fullOpt,
    });

    this.props.onSelect(id);
  }

  closePan() {
    this.setState({visible: false});
  }

  renderOptions = ({item}) => (
    <TouchableOpacity
      style={customStyle.option}
      onPress={() => this.select(item.id)}>
      <Text
        style={
          item.id === this.state.selectedValue
            ? customStyle.optionLabelActive
            : customStyle.optionLabel
        }>
        {item.description ? item.description : item.name}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const {options, selectedValue} = this.state;
    const {error, fixedLabels} = this.props;
    var selectedData = null;
    if (options && selectedValue) {
      const key = searchObj(options, 'id', selectedValue);
      if (key > -1) {
        selectedData = options[key].name;
      }
    }

    return (
      <View>
        <Modal
          avoidKeyboard={false}
          animationType="slide"
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => this.closePan()}>
          <KeyboardAvoidingView>
            <TouchableOpacity
              style={customStyle.modalOverlay}
              activeOpacity={2}
              onPress={() => this.closePan()}>
              <TouchableWithoutFeedback>
                <View style={customStyle.pan}>
                  <View style={customStyle.panHeader}>
                    <Text style={customStyle.panHeaderTxt}>
                      {this.props.label ? this.props.label : this.props.title}
                    </Text>
                  </View>
                  <View style={{marginVertical: 15, paddingHorizontal: 20}}>
                    <Searchbar onSearch={q => this.search(q)} />
                  </View>
                  <FlatList
                    data={options}
                    keyboardShouldPersistTaps="always"
                    extraData={this.state}
                    contentContainerStyle={customStyle.panBody}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={this.renderOptions}
                  />
                  <View style={customStyle.panFooter}>
                    <TouchableOpacity
                      onPress={() => this.closePan()}
                      style={customStyle.submitBtn}>
                      <Text style={customStyle.submitBtnTxt}>Batal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </Modal>
        <View style={formStyle.container}>
          <Text style={formStyle.label}>
            {selectedData ? this.props.label : null}
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({visible: true})}
            style={error ? formStyle.error : formStyle.default}>
            {selectedData ? (
              <Text style={formStyle.txtActive}>{selectedData}</Text>
            ) : (
              <Text style={error ? formStyle.txtError : formStyle.txt}>
                {this.props.title}
              </Text>
            )}
            <FontAwesome
              name="chevron-down"
              style={error ? formStyle.iconError : formStyle.icon}
            />
          </TouchableOpacity>
          {error ? <Text style={formStyle.labelError}>{error}</Text> : null}
        </View>
      </View>
    );
  }
}

const customStyle = StyleSheet.create({
  modalOverlay: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000040',
  },
  pan: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    top: 0,
    height: '100%',
    width: '100%',
    borderRadius: 3,
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#C7C8CA',
  },
  panHeaderTxt: {
    fontFamily: FONT_FAMILY.medium,
    color: '#646464',
    fontSize: 18,
  },
  panBody: {
    paddingHorizontal: 20,
  },
  panBodyTitle: {
    fontFamily: FONT_FAMILY.regular,
    color: '#3E50B4',
    fontSize: 20,
  },
  panFooter: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  submitBtn: {
    backgroundColor: '#3E50B4',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 20,
  },
  submitBtnTxt: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 14,
    color: '#fff',
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: '#F1F1F1',
  },
  optionLabel: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: '#646464',
  },
  optionLabelActive: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
    color: '#3E50B4',
  },
});
