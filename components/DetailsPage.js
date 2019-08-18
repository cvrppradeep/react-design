import React from 'react';
import {
  Image,
  ImageBackground,
StyleSheet,
ScrollView,
Text,
 View,TouchableOpacity
} from 'react-native';
import axios from 'axios';

import CartButton from '../components/CartButton';

export default class DetailsPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    Product: {}
  }
  componentDidMount() {
    axios.get(API+`/api/products/`+this.props.navigation.getParam('id'))
      .then(res => {
        const Product = res.data;
       
        this.setState({ Product });
      })
     
    }
render() {
    // const Product = this.props.navigation.getParam('id')
    return (
      <View style={styles.container}>
    <ScrollView >
       <View  >
       <ImageBackground source={require('../assets/images/banner2.jpg')} style={{width: '100%', height: 220}}>
        <Text style={{color:'white',marginTop:60,marginLeft:20,fontSize:28,width:300}}>
          Crate OverView
        </Text>
         </ImageBackground>
        </View> 
         < View style={styles.Card} key={this.state.Product._id} >
       <ImageBackground   source={{uri:this.state.Product.img && API+this.state.Product.img[0].small}}
        imageStyle={{ borderRadius: 20 }} 
        style={styles.cartbanner}>
    </ImageBackground>
        </View>
      <View>
      <View style={styles.cartitem} >
        <Text  style={styles.productsize}>{this.state.Product.name}</Text>
       <Text  style={styles.fontsize}> ₹ {this.state.Product.price}</Text>
       <TouchableOpacity style={[styles.buttonContainer,styles.addcart]}>
                <Text style={{color:'#9E9E9E',fontWeight:"500"}}>Add to Cart </Text> 
              </TouchableOpacity></View>
      </View>
        <View style={styles.smallcard}>
        <View style={styles.productflexrow}>
        <View style={{flex:1,width:100,marginLeft:19}}>
<Text style={{color:"#66BB6A",textAlign: 'left',fontSize:20, }}>
  Mixed crate
</Text></View>
<View style={{flex:2}}>
<Text style={{marginTop:-10}}>Small</Text>
<Text style={{color:"#BDBDBD",marginTop:5 }}>2.4lbs of product</Text>
<Text style={{color:"#BDBDBD",marginTop:5 }}>$29.9</Text>
</View></View>

        </View>
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
 height:10,
  },
  cartbanner:{
    width:190,
    height:180,
    // marginTop:10,
  },
 flexrow:{
flex:1,
flexDirection:"row",
alignItems:"center",
  },
  Card: {
    flex:1,
    justifyContent:"center",
alignContent:"center",
    alignItems: 'center',
    marginTop:-80,
    marginBottom: 1,
    width:200,
    height:190,
    marginLeft:"25%",
    borderRadius:20,
    marginBottom:10,
    backgroundColor:"#F5F5F5",
    borderColor: 'red',
    borderWidth:2
  },
  smallcard: {
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor:"#F5F5F5",
    width:290,
    height:90,
     marginLeft:60,
    borderRadius:20,
    marginBottom:110,
    },
  productflexrow:
  {
    flex:1,
flexDirection:"row",
alignItems:"center",
  },
 
  fontsize:{
    fontSize:40,
    fontWeight:"900",
    color:'red',
    marginTop:10,
  },
  productsize:{
    // marginTop:10,
    fontSize:25,
    fontWeight:"900",
  },
cartitem:{
  paddingLeft:80,
  marginTop:17,
},
flexcolumn:{
  flex:1,
  flexDirection:"column",
  alignItems:"center",
},
buttonContainer: {
  marginTop:20,
  height:35,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:150,
  borderRadius:30,
  backgroundColor: "white",
  marginLeft:-5,
  borderColor: 'red',
  borderWidth:2
},

});
