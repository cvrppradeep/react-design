import React, { Component } from 'react';
import { View,Text,Image, TextInput,StyleSheet,TouchableOpacity,AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

import { ExpoLinksView } from '@expo/samples';
import Touchable from 'react-native-platform-touchable';
import ListingPage from '../components/ListingPage';

export default class Products extends Component {
    static navigationOptions = {
       header:null,
      };  
      
  render() {
    
    return (
     
        <View>

      <View style={styles.container}>
     
     
       <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View >
        <Image style={styles.imagesizing} source={require('../assets/images/groming.jpg')} />
            </View>
            <View style={styles.details}>
              <Text style={styles.fontsize}>Grooming Items</Text>
              <Text style={{color:"green"}}>Upto 20% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
       </View>
    <View style={{}}>
    <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View >
        <Image style={styles.imagesizing} source={require('../assets/images/groming.jpg')} />
            </View>
            <View style={styles.details}>
              <Text style={styles.fontsize}>Grooming Items</Text>
              <Text style={{color:"green"}}>Upto 20% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
    </View>
    </View>
   
     )
    }
  }
  
  
const styles = StyleSheet.create({
  imagesizing:{
    width:100,
    height:120,
    marginLeft:10,
    marginTop:10,
    },
    container: {
      flex: 1,
     flexDirection:"row",
      marginTop:24,
      marginBottom:160
      
    },
    flexrow:{
      flex:1,
      flexDirection:"row",
      alignItems:"center",
        },
    color:{
        backgroundColor:"#EEEEEE", 
        width:410,
      height:140,
    },
    fontsize:{
      fontSize:20,
      fontWeight:"900",
      color:'#FE4040'
    },
   
  details:{
    paddingLeft:30,
    marginTop:20
  },
 
    flexrow:{
flex:1,
flexDirection:"row",
justifyContent:"space-evenly",
marginTop:10,
    },
    flexcolumn:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        
            },
            welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
                
              },
              card: {
                alignItems: 'center',
                
                marginBottom: 1,
                backgroundColor:"#F5F5F5",
                width:360,
                height:150,
                marginLeft:25,
                borderRadius:20,
                marginBottom:110
              },
              
})
