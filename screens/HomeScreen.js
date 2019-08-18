import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,TextInput,TouchableOpacity
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import { WebBrowser } from 'expo';
import Button from "../components/Button";

import Cart from "../components/Cart";
import Profile from '../components/Profile';
import OfferCard from '../components/OfferCard';
import HomePage from '../components/MainPage';
import ListingPage from '../components/ListingPage';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null ,
    visible: false 
    
  };
   render() {
    return (
      <View>   
      <ImageBackground source={require('../assets/images/home.jpg')} style={{width: '100%', height: '100%'}}>
      <Image style={{width:100,height:110,marginRight:20,marginLeft:145,marginTop:150}} source={require('../assets/images/logo1.png')} />
      <Text style={styles.logoname}>FoodFire</Text>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('LoginPage')}>
         
          <Text style={styles.loginText}>Enter</Text>
        </TouchableHighlight>
  </ImageBackground>
  
  
</View>
      
    );
  }

 
}

const styles = StyleSheet.create({
  
  logoname: 
  {
    marginLeft:160,
    color:"white",
    fontSize: 20,
    marginTop:10,
   },
   
   buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
    marginLeft:150,
    marginTop:24,
  },
  loginButton: {
    backgroundColor: "#E8EAF6",
  },
  loginText: {
    
  },
  
});
