import React, { PropTypes } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  Image,
  Component,
  AppRegistry
} from "react-native";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CartButton from "../components/CartButton";
import Profile from "../components/Profile";
import SuccessPage from "../components/SuccessPage";
import AnimateLoadingButton from 'react-native-animate-loading-button';
export default class Cart extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
  }
  _onPressHandler() {
    this.loadingButton.showLoading(true);
    console.log('Pressed!');
    
    
    // mock
    setTimeout(() => {
      this.loadingButton.showLoading(false);
    }, 3000);
    
    this.props.navigation.navigate('SuccessPage')  

  }
  render() {
    return (
      <View style={styles.mainviewStyle}>
        <ContainerView />
        <View style={styles.footer}>
          {/* <TouchableHighlight style={styles.bottomButtons}><Text style={styles.footerText}>A</Text></TouchableHighlight><TouchableHighlight style={styles.bottomButtons}><Text style={styles.footerText}>B</Text></TouchableHighlight> */}
          
            <View style={{alignContent:'center',alignItems:'center',flex:1}}>
       
            {/* <View style={{paddingBottom:5}}>
        <AnimateLoadingButton
        
          ref={c => (this.loadingButton = c)}
          width={300}
          height={40}
          title="Place Order"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="#E53935"
          borderRadius={15}
          onPress={this._onPressHandler.bind(this)}
        />
      </View> */}
      <View style={{paddingBottom:5}}>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('MainPage')}>
          <Text style={{fontSize:16,color:'white'}}>Back To Menu</Text>
        </TouchableHighlight>
      </View>
             </View>
          </View>
      </View>
    );
  }
}
class ContainerView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
      <View style={styles.emptycartcard} >
      <View style={styles.emptycart} >
      <View>
      <Image  source={require('../assets/images/emptycart.png')} /></View>
      <View>
      <Text style={{fontSize:22,fontWeight:'700',}}>Your cart is empty</Text>
      </View>
      <View>
      <Text style={{fontSize:18,color:'#BDBDBD',textAlign:'center',paddingTop:10}}>Looks Like you haven't added any courses to your cart yet.</Text>
      </View>
      </View>
      </View>
      <View style={styles.container}>
     {/* <ScrollView>
          <View>
          <ImageBackground source={require('../assets/images/banner2.jpg')} style={{width: '100%', height: 250}}>
        <Text style={{color:'white',marginTop:60,marginLeft:20,fontSize:28,width:300}}>
          What type of crate would you like?
        </Text>
         </ImageBackground>
        </View> 
       < View style={styles.card}>
        <View style={styles.flexrow}>
          <View >
        <Image style={styles.imagesizing} source={require('../assets/images/food.jpeg')} />
            </View>
            <View style={styles.details}>
              <Text style={styles.fontsize}>Green Salad</Text>
              </View>
            <View style={styles.price}>
            <View style={styles.flexcolumn}>
            <View style={{marginLeft:-50,marginTop:25}}>
              <Text style={styles.pricesize}>
              ₹ 27.00
              </Text>
              </View>
              <View style={{marginLeft:-60,marginTop:20}}>
           <CartButton/>
           <View >
           </View>
         </View>
         </View>
            </View>
        </View>
       </View>
       
       <View style={styles.card}>
       <View style={styles.flexcolumn}>
            <View style={styles.Footerrow}>
            <View>
              <Text style={{ fontSize: 18, marginLeft: 0 }}>SubTotal :</Text>
              <Text style={{ fontSize: 18, marginLeft: 0 }}>Delivery Fee :</Text>
              <Text style={{ fontSize: 18, marginLeft: 0 }}>Sales Tax :</Text>
 </View>
            <View>
              <Text style={{ fontSize: 18, marginLeft: 40 }}>₹27.00</Text>
              <Text style={{ fontSize: 18, marginLeft: 40 }}>₹00.00</Text>
              <Text style={{ fontSize: 18, marginLeft: 40 }}>₹00.00</Text>
            </View>
            </View>
            <View style={styles.border}></View>
           <View style={styles.Footerrow}>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 0 }}>
                  Total Amount
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 40 }}>₹27.00</Text>
              </View>
            </View>
            </View>
       </View>
       
        </ScrollView> */}
      </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
mainviewStyle: { 
   flex: 1, 
   flexDirection: "column" 
},
emptycartcard:{
  backgroundColor: "#FAFAFA",
  height:'100%'
},
emptycart:{
marginTop:220,
flex:1,
alignItems:'center',
flexDirection:'column'
},
footer: {
    position: "absolute",
    flex: 0.1,
    left: 5,
    right: 5,
    bottom: 0,
    backgroundColor: "#FFEBEE",
    flexDirection: "row",
    height: 65,
    alignItems: "center"
  },
bottomButtons: { 
    alignItems: "center", 
    justifyContent: "center", 
    flex: 1 
},
footerText: {
    color: "red",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18
  },
textStyle: { 
    alignSelf: "center", 
    color: "orange" 
  },
scrollViewStyle: { 
    borderWidth: 2,
    borderColor: "blue" 
  },
container: { flex: 1,
    backgroundColor: "#F5F5F5",
    flexDirection: "row" 
  },
nav: {
    flex: 1,
    width: 500,
    backgroundColor: "#26A69A",
    alignItems: "stretch",
    height: 50
  },
flexrow: { flex: 1,
   flexDirection: "row",
    alignItems: "center"
 },
card: {
    alignItems: 'center',
    marginTop:-80,
    marginBottom: 1,
    backgroundColor:"white",
    width:360,
    height:150,
    marginLeft:25,
    borderRadius:20,
    marginBottom:90
  },
  getStartedContainer: { 
    alignItems: "center",
    marginHorizontal: 50 
    },
Footerrow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10 
    },
  border:{
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width:330,
    marginTop:30 
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
  marginLeft:10,
  },
fontsize:{
  fontSize:23,
  fontWeight:"900",
  color:'#FE4040'
  },
pricesize:{
  fontSize:19,
  },
details:{
  paddingLeft:10,
  marginTop:-40
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
cartitem:{
  paddingLeft:80,
  marginTop:17,
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width:250,
  borderRadius:30,
  backgroundColor: "#E53935",
},


});
AppRegistry.registerComponent("TRYAPP", () => mainview);