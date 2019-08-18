import React, { Component } from 'react';
import { View,Text,Image, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
// import { Link } from 'react-router-native'

export default class OfferCard extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.offercolumn}>
      <View style={styles.offerrow}>
      {/* <Link to='/Cart'><Text>Cart</Text></Link> */}
          <View>
          {/* <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Cart")}
      >
        <Image
          style={styles.imagesizing}
          source={require("../assets/images/food.jpeg")}
        />
      </TouchableOpacity> */}
        <Image  style={{width:130,height:130}} source={require('../assets/images/babybath.jpg')} />
 </View>
 <View>
 <Image style={{width:130,height:130}} source={require('../assets/images/cooking.jpg')} />
     </View>
     <View>
     <Image  style={{width:130,height:130}} source={require('../assets/images/Laundry.jpg')} />
</View>
     </View>
     <View style={styles.offerrow} >
     <View>
        <Image style={styles.items} style={{width:130,height:130}} source={require('../assets/images/diapers.jpg')} />
 </View>
 <View>
 <Image style={{width:130,height:130}} source={require('../assets/images/snack.jpg')} />
     </View>
     <View>
 <Image style={{width:130,height:130}} source={require('../assets/images/Household.jpg')} />
     </View>
 
     </View>
     </View>
     <View style={styles.welcomeContainer}>
        
            
          </View>
     </View>
     

     
     )
  }
}
const styles = StyleSheet.create({
  offerimagesizing: { width: 100, height: 80, marginLeft: 20 },
    container: {
      flex: 1,
      
      flexDirection:"row",
      marginTop:2,
      width:410,
      height:300,
    },
    
    offerrow:{
flex:1,
flexDirection:"row",
justifyContent:"space-around",
marginTop:10,
    },
    offercolumn:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        
            },
            welcomeContainer: {
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 20,
                
              }
})
