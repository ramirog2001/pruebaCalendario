import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';

class AnadirHorario extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    fecha = new Date(date)
    console.log("A date has been picked: ", fecha.getDate());
    this.hideDateTimePicker();
  };

  render() {
    return (
      <>
        <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode = {'datetime'}
        />
      </>
    );
  }
}
export default AnadirHorario;
