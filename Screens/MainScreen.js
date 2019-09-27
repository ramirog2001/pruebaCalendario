import React, { Component } from 'react';

import { Text, View, Animated, Easing  } from 'react-native';

import Modal from 'react-native-modal';

import { Button } from 'react-native-elements';

import Icon from "@expo/vector-icons/FontAwesome5";

import Horarios from '../components/Horarios'

import AnadirHorario from './AnadirHorario'

class MainScreen extends Component {

    state = {
                rotValue: '0deg',
                modalHidden: true,
                reminders: []
            }

    spin= new Animated.Value(0)


    _startAnimation = () =>{
        this.changeModal();

        Animated.timing(this.spin,  {   
                                        toValue: 1,
                                        duration: 500,
                                        easing: Easing.linear
                                    }
                        )
                        .start(() => { this.spin = new Animated.Value(0)})

        this.setState({  
                        rotValue: this.spin.interpolate({
                            inputRange: [0, 1],
                            outputRange: this.state.modalHidden ?  (['0deg', '90deg']) : (['90deg', '0deg'])
                        })
        })
    }
            

    changeModal = () => {
        modalHidden = !this.state.modalHidden
        this.setState({modalHidden})
    }

    saveCalendar = (date, text) => {
        e = this.state.reminders
        save = {date, text}
        e.push(save);
        this.setState({reminders: e})
    }

    render() {

        AnimatedIcon = Animated.createAnimatedComponent(Icon); 
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                
                    <Modal
                        isVisible={!this.state.modalHidden}
                        animationIn='slideInUp'
                        animationOut='slideOutDown'
                        animationInTiming={500}
                        animationOutTiming={500}
                        >
                        
                        <AnadirHorario changeModal= {this._startAnimation} saveCalendar= {this.saveCalendar}/>
                    
                    </Modal>
                <View style={{height: '100%'}}>
                    <Horarios reminders = {this.state.reminders}/>
                </View>
                <View style={{position: 'absolute', bottom: 0, right: 0, height: '12%'}}>
                    

                <Button
                    buttonStyle={{height: 60, width: 60, borderRadius: 30, marginRight: '7%'}} 
                    icon={
                    <AnimatedIcon
                        style={{transform: [{rotate: this.state.rotValue}], fontSize: 50}}
                        name={"plus"}
                        />
                    }       
                    onPress = { () => this._startAnimation()}
                />
                </View>
            </View>
        );

    }
    ;
}

export default MainScreen;