import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';


var bool = false;

export default class Torcher extends Component {
  static navigationOptions = {
    title: 'Torch',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  state = {
  torchStatus: false
}
torchSwitch = () => {
  Torch.switchState(!this.state.torchStatus);
  console.log(this.state.torchStatus);
  this.setState({ torchStatus: !this.state.torchStatus});
}

  render() {
    const { navigate } = this.props.navigation;
    //onPress={() =>navigate('Home')}
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.torchSwitch}>
      <ImageBackground source={this.state.torchStatus ? require('./pics/torchon.png') : require('./pics/torchoff.png')} style={{width: '100%', height: '100%' }} >
        <View style={styles.buttonContainer}>
          <Button
            onPress={() =>navigate('Home')}
            title="Menu"
            style={{width: '100%', height: '100%', fontSize:1, color: 'transparent',backgroundColor: 'transparent',alignSelf:'flex-start'}}

          />
        </View>
        </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    color: 'transparent'

  },
  Button: {
    color: 'transparent',


  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
