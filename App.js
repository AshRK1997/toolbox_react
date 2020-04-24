import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native';
import CardView from 'react-native-cardview';
import { Image } from 'react-native'
import { Card } from 'react-native-paper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";





export default class App extends Component {
  render() {
    return (
      <ScrollView style=styles.scrollView>
      <SafeAreaView style={styles.safeAreaView}>

        <View style={styles.container}>


          <CardView
            cardElevation={7}
            cardMaxElevation={7}
            cornerRadius={5}
            style={styles.card}
            >
            <Image
              source={require('./torch.png')}
              style={{height:100,width: 100,alignSelf: 'center',
              justifyContent:'center',
              alignItems: 'center' }}
            />
            <Text style={styles.text}>Torch</Text>
            </CardView>
            <CardView
              cardElevation={7}
              cardMaxElevation={7}
              cornerRadius={5}
              style={styles.card}
            >
            <Image
              source={require('./alarm.png')}
              style={{height:100,width: 100,alignSelf: 'center',
              justifyContent:'center',
              alignItems: 'center' }}
            />
              <Text style={styles.text}>Alarm</Text>
            </CardView>
            <Text style={{textAlign:'center',marginTop:50, fontSize: RFValue(23),margin:10}}>Please choose one of the above</Text>
          </View>

      </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    flexGrow: 1,
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
