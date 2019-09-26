import React, { Component } from 'react';

import { Text, View, Animated, Easing } from 'react-native';

import { Button } from 'react-native-elements';

import Icon from "@expo/vector-icons/FontAwesome5";


class MainScreen extends Component {

    state = {rotValue: '0deg'}

    spin= new Animated.Value(0)


    _startAnimation = () =>{
        Animated.timing(this.spin,  {   
                                        toValue: 1,
                                        duration: 1500,
                                        easing: Easing.linear
                                    }
                        )
                        .start(() => { this.spin = new Animated.Value(0)})

        this.setState({  
                        rotValue: this.spin.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
        })
    }
            


    render() {

        

    
        AnimatedIcon = Animated.createAnimatedComponent(Icon);

        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <View style={{height: '85%'}}>

                </View>
                <View style={{height: '15%', alignItems: "flex-end", backgroundColor: 'white', justifyContent: "center"}}>
                    

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
}

export default MainScreen;