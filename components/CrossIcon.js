import React from 'react';
import { Animated, Easing, TouchableHighlight } from 'react-native';

import Icon from "@expo/vector-icons/FontAwesome";

const CrossIcon = () => {
    
    AnimatedIcon = Animated.createAnimatedComponent(Icon);
    spinValue = new Animated.Value(0)
    // First set up animation 
    Animated.timing(
        this.spinValue,
    {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear
    }
    ).start()

    iconSize= new Animated.Value(20)

    // Second interpolate beginning and end values (in this case 0 and 1)
    const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    })
    return (

            <AnimatedIcon
                style={{transform: [{rotate: spin}], fontSize: 50}}
                name={"plus"}
                />
    );
};
//,
export default CrossIcon;