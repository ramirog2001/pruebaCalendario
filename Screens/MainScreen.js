import React, { Component } from 'react';

import { Text, View, Animated } from 'react-native';

import { Button } from 'react-native-elements';

import Icon from "@expo/vector-icons/MaterialIcons";

class MainScreen extends Component {

    AnimatedIcon = Animated.createAnimatedComponent(Icon);

    spinValue = new Animated.Value(0);

    _start = () => {
        Animated.timing( 
            this.spinValue,
        {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear
        }
        ).start()
    }
    
    spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })


    render() {
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <View style={{height: '85%'}}>

                </View>
                <View style={{height: '15%', alignItems: "flex-end", backgroundColor: 'white', justifyContent: "center"}}>
                    

                <Button
                    buttonStyle={{height: 60, width: 60, borderRadius: 30, marginRight: '7%'}} 
                    icon={
                        <this.AnimatedIcon
                            name='add'
                            size={40}
                            color='white'
                            style={{ transform: [{rotate: '20deg'}] }}
                            
                        />
                    }           
                />
                </View>
            </View>
        );
    }
}

export default MainScreen;