import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';

class AnadirHorario extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      datePicked: null,
      text: ' '
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({datePicked: date})
    this.hideDateTimePicker();  
  };

  render() {
    return (
        <View style = {{flex: 1, height: '60%',backgroundColor: 'white'}}>

          <Button title="Elegir Fecha" onPress={this.showDateTimePicker} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode = {'datetime'}
            />
          {
            this.state.datePicked !== null &&
            <>
          <View style={{backgroundColor: 'white'}}>
            <Text>
              Fecha: {String(this.state.datePicked.getDate()) + '/' + String(this.state.datePicked.getMonth() + 1) + ' ' + this.state.datePicked.getFullYear()}
            </Text>
            <Text>
              Hora: {this.state.datePicked.toLocaleTimeString()}
            </Text>
            <TextInput
              style={{borderColor: 'gray', borderWidth: 2, padding: 10 }}
              placeholder='Ingresar nombre'
              onChangeText = { ( text ) => this.setState({text})}
              />
          </View>
        </>
        }
        <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
            {this.state.text !== ' ' &&
            <Button title = 'Guardar' onPress = {() => this.props.saveCalendar(this.state.datePicked, this.state.text)}/>
            }
          <Button title = 'Cerrar' onPress = {() => this.props.changeModal()}/>
        </View>

        </View>

    );
  }
}
export default AnadirHorario;