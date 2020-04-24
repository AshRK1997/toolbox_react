import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.

export default class Alarm extends Component {
  static navigationOptions = {
    title: 'Alarm Clock',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>You are on SecondPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
