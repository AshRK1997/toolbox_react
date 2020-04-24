import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import { Image, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
      //Sets Header text style
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={styles.safeAreaView}>

        <View style={styles.container}>

          <TouchableOpacity onPress={() => navigate('Torch')}>
          <CardView
            cardElevation={7}
            cardMaxElevation={7}
            cornerRadius={5}
            style={styles.card}
            >
            <Image
              source={require('./pics/torch.png')}
              style={{height:100,width: 100,alignSelf: 'center',
              justifyContent:'center',
              alignItems: 'center' }}
            />
            <Text style={styles.text}>Torch</Text>
            </CardView>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Alarm')}>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={5}
              style={styles.card}
            >
            <Image
              source={require('./pics/alarm.png')}
              style={{height:100,width: 100,alignSelf: 'center',
              justifyContent:'center',
              alignItems: 'center' }}
            />
              <Text style={styles.text}>Alarm</Text>
            </CardView>
            </TouchableOpacity>
            <Text style={{textAlign:'center',marginTop:50, fontSize: RFValue(23),margin:10}}>Please choose one of the above</Text>
          </View>

      </SafeAreaView>
      </ScrollView>


        //onPress={() =>navigate('Home')}

    );
  }
}
const styles = StyleSheet.create({
  scrollView:{

    textAlign:'center'
  },
  safeAreaView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent:'center'
    // backgroundColor: '#EEEEEE',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height:200,
    width: 250,
    margin: 15
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    justifyContent: 'center',
    fontSize: RFValue(20)
  },

});
