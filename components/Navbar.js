import React from 'react';
import {
  Image,
  Platform,
StyleSheet,
ScrollView,
Text,
 View,TextInput
} from 'react-native';
import { WebBrowser } from 'expo';
import SearchBar from '../components/SearchBar';


import CartButton from '../components/CartButton';

import OfferCard from '../components/OfferCard';
import Products from '../components/Products';
export default class Navbar extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
    <ScrollView >
        <View style={styles.nav}>
        <View style={styles.flexrow}>
       <View>
        <Image style={{width:30,height:30,marginRight:20,marginLeft:10}} source={require('../assets/images/menu.png')} />
         
       </View>
       <View style={{flex: 1}}>
     <View>
         <SearchBar/>
        {/* <Image style={{width:30,height:35,backgroundColor:'white'}} source={require('../assets/images/search.png')} /> */}
        </View>
       </View>
        
        {/* <View style={styles.flexrow}>
        
        <Image style={{width:25,height:25,marginRight:15,marginLeft:40}} source={require('../assets/images/heart.png')} />
        <Image onPress={() => this.props.navigation.navigate('Profile')}  style={{width:30,height:30}}source={require('../assets/images/cart.png')} />
        </View> */}
        </View>
        </View>
         
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection:"row",
    marginTop:24,
  },
  nav:{
    flex: 1,
    width: 500,
    backgroundColor:"#F44336",
   alignItems: 'stretch',
    height: 50
  },
  flexrow:{
flex:1,
flexDirection:"row",
alignItems:"center",
  },
  
  productflexrow:
  {
    flex:1,
flexDirection:"row",
alignItems:"center",
  },
  imagesizing:{
    width:100,
    height:80,
  marginLeft:20,
  },
  fontsize:{
    fontSize:15,
    fontWeight:"900",
  },
details:{
  paddingLeft:30,
  marginTop:-50
},
price:{
  paddingLeft:60,
  marginTop:17,
},
flexcolumn:{
  flex:1,
  flexDirection:"column",
  alignItems:"center",
},

});
