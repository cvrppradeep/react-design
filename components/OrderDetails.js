import React, { PropTypes } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  Component,
  AppRegistry
} from "react-native";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CartButton from "../components/CartButton";
import Profile from "../components/Profile";
import SuccessPage from "../components/SuccessPage";
export default class Orderdetails extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
  }
  render() {
    return (
<View style={styles.container}>
<Text style={{fontSize:25,color:"#9E9E9E",marginTop:39,marginLeft:10,}}>
  Schedule Delivery
</Text>
<View style={styles.welcomecontainer}> 
  <View style={{flex:1,flexDirection:"row",   justifyContent: "center",alignItems:"center"}}>
    <View >
      <Text style={{paddingLeft:20,fontSize:17}}>Order No:</Text>
    </View>
    <View >
      <Text style={{paddingRight:20,fontSize:17}}>1234567889</Text>
    </View>
  </View>
</View>
<View style={styles.cardcontainer}> 
  <View style={{flex:1,flexDirection:"row",  justifyContent: "center",alignItems:"center"}}>
    <View >
      <Text style={{paddingLeft:20,fontSize:17}}>Payment Method:</Text>
    </View>
    <View >
      <Text style={{paddingRight:20,fontSize:17}}>COD</Text>
    </View>
  </View>
</View>
<View style={styles.body}>
<View>
<View>
  <Text style={{color:"#0277BD",fontSize:18,paddingLeft:10}}>Name</Text>
</View>
<View style={styles.addressrow}>
  <View>
    <Text style={{color:"#43A047"}}>
Address
    </Text>
  </View>
  <View>
    <Text  style={{color:"#BDBDBD"}}>
      Date:**/**/****
    </Text>
  </View>
</View>
<View style={styles.bodycontent}>
<ScrollView>
<View style={{flex:1,flexDirection:"row",justifyContent: "space-around",paddingTop:10}}>
<View>
  <Image style={{width:40,height:40,borderRadius:20}} source={require('../assets/images/food.jpeg')} />
</View>
 <View>
   <Text style={{paddingBottom:20,paddingTop:10}}>Item Name</Text>
   </View>
 <View>
   <Text style={{paddingBottom:20,paddingTop:10}}>Price</Text>
   </View>
 <View>
   <Text style={{paddingBottom:20,paddingTop:10}}>qnt</Text>
   </View>
</View>
</ScrollView>
</View>
<View style={styles.addressrow}>
  <View>
    <Text style={{color:"red"}}>
Order Status:
    </Text>
    <Text style={{color:"#01579B",fontSize:10,paddingTop:8}}>Need Help?</Text>
  </View>
  <View>
    <Text>
      Total:1234
    </Text>
  </View>
</View>

</View>
</View>

</View>
      );
    }
  }
  var styles = StyleSheet.create({
container:{
  height:"100%",
  backgroundColor:"#EEEEEE"
},
welcomecontainer:{
  width:350,
  height:40,
  marginLeft:30,
  backgroundColor:"white",
  marginTop:20,
},

cardcontainer:{
  width:300,
  height:40,
  marginLeft:50,
  backgroundColor:"#FFEBEE",
  marginTop:10,
  borderRadius:40
},
border:{
  borderBottomColor: '#BDBDBD',
  borderBottomWidth: 1,
  width:388,
  marginTop:30,
  }, 
 body:{
  width:390,
  height:250,
  marginLeft:10,
  backgroundColor:"white",
  marginTop:10 ,
  // borderWidth:1,
  borderColor:'#E0E0E0',
  borderRadius:7
 }, 
addressrow:{
  flex:1,
  flexDirection: "row",
  justifyContent:"space-between",
  paddingLeft:10,
  paddingRight:10,
  paddingTop:10
},
bodycontent:{
  width:390.8,
  height:120,
  marginLeft:-1,
  borderWidth:0.6,
  marginTop:30 ,
  borderColor:'#E0E0E0'
}
  })
AppRegistry.registerComponent("TRYAPP", () => mainview);