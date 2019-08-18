import React from 'react';
import {
  Image,
  TouchableHighlight, 
StyleSheet,
ScrollView,
Text,
 View,TextInput
} from 'react-native';
import { WebBrowser } from 'expo';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

import { green } from 'ansi-colors';
export default class SuccessPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
    <ScrollView >
       <View>
         <Navbar/>
       </View>
       < View style={styles.welcomeContainer}>
       <View>
       <Image style={styles.imagesizing} source={require('../assets/images/smiley.png')} />
       </View>
       <Text style={styles.successtext}> Order Placed Successfully.</Text>
       <Text style={styles.orderid}>Order ID:</Text>
       <Text style={styles.orderamount}>Order Amount:</Text>
       <View style={styles.border}>
</View>
<Text style={styles.confirm}>
  A Confirmation email has been sent to
</Text>
<Text style={styles.email}>
  smnbffvshs@gmail.com
</Text>

              <TouchableHighlight   style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('OrderDetails')}>
              <Text style={{color:"white",fontSize:15}}>View Order History</Text> 
        </TouchableHighlight>
          </View>    
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFEBEE",
    flexDirection:"row",
   
  },
 welcomeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 1,
    backgroundColor:"#fff",
    width:380,
    height:300,
    marginLeft:15,
    marginRight:15,
    borderRadius:19,
  },
  buttonContainer: {
    marginTop:10,
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:10,
    backgroundColor: "#E53935",
    
  },
  imagesizing:{
    width:60,
    height:60,
    marginTop: 10,
    
  },
  successtext:{
    fontSize:18,
    color:"#00C853",
    marginTop: 10,
   fontWeight: '500'
  },
  orderid:{
    fontSize:15,
    color:"#BDBDBD",
    marginTop: 10,
    marginLeft:-130,
  },
  orderamount:{
    fontSize:15,
    color:"#BDBDBD",
    marginTop: 6,
    marginLeft:-90,
  },
  border:{
    
      borderBottomColor: '#EEEEEE',
      borderBottomWidth: 1,
   width:330,
   marginTop:15,

  },
  confirm:{
    fontSize:12,
    color:"#BDBDBD",
    marginTop: 10,
    marginBottom:10,
   
  }
  
});
