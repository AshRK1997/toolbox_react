import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import { Image } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Home from './pages/home';
import Alarm from './pages/alarm';
import Torcher from './pages/torch';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {

    Home: { screen: Home },
    Torch: { screen: Torcher },
    Alarm: { screen: Alarm}

  },

  {initialRouteName: 'Home'}

);


const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
