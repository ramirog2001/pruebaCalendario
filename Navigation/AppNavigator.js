import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../Screens/MainScreen';
import DetalleHorarios from '../Screens/DetalleHorarios';

const topBarStyle = {
    headerStyle: {
        backgroundColor: 'blue',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        
      },
}

const root = createStackNavigator({
    MainScreen,
    DetalleHorarios
  },
  {
      defaultNavigationOptions: topBarStyle,
      initialRouteName: 'MainScreen',
  })

export default createAppContainer(root);