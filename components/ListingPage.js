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
import SearchBar from '../components/SearchBar';
import CartButton from '../components/CartButton';
import API from '../config';

export default class ListingPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    Products: []
  }
  componentDidMount() {
    axios.get(API+`/api/products`)
      .then(res => {
        const Products = res.data;
        this.setState({ Products });
       
      })
  }
 
  render() 
{ //console.log(this.state.Products)
  return (
    <View style={styles.container}>
    
      <View style={styles.nav}>
      <SearchBar/>
      </View>
       {/* <View style={{marginTop:30,flex:1,alignItems:'center',marginBottom:20,backgroundColor:"#F44336",height:10}}>
       </View> */}
         {/* <Text style={{color:'white',marginTop:60,marginLeft:20,fontSize:28,width:300}}>
          What type of crate would you like?
        </Text>  */}
       
        <ScrollView >
        {this.state.Products.map(Product =>
        <TouchableOpacity key={Product._id}  onPress={() => this.props.navigation.navigate('DetailsPage',{id:Product._id})} >
       
       < View style={styles.card} >
      
        <View style={styles.flexrow}>
          <View >
        <Image style={[styles.imagesizing,styles.width1]} source={{uri:API+Product.img[0].small}}/>
            </View>
            <View style={[styles.details,styles.width2]}>
            
              <Text  style={styles.fontsize}>{Product.name}</Text> 
              <Text  style={styles.pricesize}> ₹ 
              {Product.variants[0].price}
              </Text> 
              
              <TouchableOpacity style={[styles.buttonContainer,styles.addcart]} onPress={this.onclickView}>
                <Text style={{fontWeight:"500"}}>Add to Cart</Text> 
              </TouchableOpacity> 
              <View style={styles.addbtn}>
            <CartButton/>
              </View> 
            </View>
          </View>
       </View>
  
       </TouchableOpacity>
      )}
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
  nav:{
    height:50,
    backgroundColor:'#F44336',
    marginTop:24,
    paddingHorizontal: 10,
    justifyContent:"center",
    alignItems:"center"
  },
  width1:{
    width:170,
    alignItems:"flex-start"
  },
  width2:{
    width:180,
   },
 flexrow:{
flex:1,
flexDirection:"row",
alignItems:"center",
  },
  card: {
    alignItems: 'center',
    marginTop:10,
    marginBottom: 1,
    backgroundColor:"#F5F5F5",
    width:360,
    height:150,
    marginLeft:25,
    borderRadius:20,
    marginBottom:20
  },
  productflexrow:
  {
    flex:1,
flexDirection:"row",
alignItems:"center",
  },
  imagesizing:{
    width:170,
    height:130,
 
  },
  fontsize:{
    fontSize:15,
    fontWeight:"900",
    color:'#FE4040'
  },
  pricesize:{
    fontSize:19,
    fontWeight:"600",
    marginTop:6,
  },
details:{
  paddingLeft:20,
  marginTop:20
},
price:{
  paddingLeft:50,
  marginTop:17,
},
flexcolumn:{
  flex:1,
  flexDirection:"column",
  alignItems:"center",
},
buttonContainer: {
 
  height:35,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width:150,
  borderRadius:30,
  backgroundColor: "yellow",
 
},
addcart:{
  marginBottom:20,
  marginTop:10,
  marginLeft:-10,
},
addbtn:{
  marginBottom:20,
  marginTop:10,
  marginLeft:-5,
  height:45
}

});
