import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/screens/Home';
import Follow from './src/screens/Follow';
import Profile from './src/screens/Profile';


const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home 
  },
  Follow: { 
    screen: Follow 
  },
  Profile: { 
    screen: Profile 
  },
  }, {
    defaultNavigationOptions: {
      headerTintColor: "#222222",
      headerStyle: {
        backgroundColor: "#F1F1F1",
      },
      headerTitleStyle: {
        color: "#222222",
      }
    }

});

const App = createAppContainer(AppNavigator);
export default App;
