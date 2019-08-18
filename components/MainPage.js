import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,TouchableOpacity
} from 'react-native';

import SlideMenu from './SlideMenu';
import axios from 'axios';
import Products from './Products';
import SearchBar from './SearchBar';
export default class MainPage extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {categories: []};
  }
  componentDidMount(){
    axios.get('https://api.iotutorials.com/api/products')
    .then(response => {
      this.setState({ categories: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render() {
    return (
      this.state.categories!=null && 
<View>

<ScrollView scrollEventThrottle={16}>
<ImageBackground source={require('../assets/images/banner1.jpg')} style={{width: '100%', height: 340}}>
<View style={{marginTop:30,flex:1,alignItems:"center"}}><SearchBar/></View>
<Text titleStyle = {{fontFamily: 'italic'}} style={[styles.logoname,styles.topmargin]}>Hi Val,</Text>
<Text titleStyle = {{fontFamily: 'italic'}} style={styles.logoname}>What type of food do you eat?</Text>
<View style={styles.border}>
<View style={{height:100,marginTop:10}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name={this.state.categories.name}  
/>
<SlideMenu  imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
<SlideMenu imageUri={require('../assets/images/babybath.jpg')}
name="home"
/>
</ScrollView>
</View>
      </View>
      </ImageBackground>
      <View style={styles.container}>
     <View style={styles.offercolumn}>
      <View style={styles.offerrow}>
     <View>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
        <Image  style={{width:140,height:150}} source={require('../assets/images/babybath.jpg')} />
        </TouchableOpacity>
 </View>
 <View>
 <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
 <Image style={{width:140,height:150}} source={require('../assets/images/cooking.jpg')} />
 </TouchableOpacity>
     </View>
     <View>
     <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
     <Image  style={{width:140,height:150}} source={require('../assets/images/Laundry.jpg')} />
     </TouchableOpacity>
</View>
     </View>
     <View style={styles.offerrow} >
     <View>
     <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
        <Image style={styles.items} style={{width:140,height:150}} source={require('../assets/images/diapers.jpg')} />
        </TouchableOpacity>
 </View>
 <View>
 <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
 <Image style={{width:140,height:150}} source={require('../assets/images/snack.jpg')} />
 </TouchableOpacity>
     </View>
     <View>
     <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
 <Image style={{width:140,height:150}} source={require('../assets/images/Household.jpg')} />
 </TouchableOpacity>
     </View>
 </View>
     </View>
    </View>
     <View style={styles.border}></View>
      <View>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View style={styles.width1} >
        <Image style={styles.imagesizing} source={require('../assets/images/groming.jpg')} />
            </View>
            <View style={[styles.details,styles.width2]}>
              <Text style={styles.fontsize}>Grooming Items</Text>
              <Text style={{color:"green"}}>Upto 20% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View style={styles.width1} >
        <Image style={styles.imagesizing} source={require('../assets/images/electronic.jpg')} />
            </View>
            <View style={[styles.details,styles.width2]}>
              <Text style={styles.fontsize}>Electronics Appliances</Text>
              <Text style={{color:"green"}}>Upto 40% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View style={styles.width1} >
        <Image style={styles.imagesizing} source={require('../assets/images/party.jpg')} />
            </View>
            <View style={[styles.details,styles.width2]}>
              <Text style={styles.fontsize}>Party Essentials</Text>
              <Text style={{color:"green"}}>Upto 25% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate("ListingPage")} >
            < View style={styles.card}>
        <View style={styles.flexrow}>
          <View style={styles.width1}>
        <Image style={styles.imagesizing} source={require('../assets/images/shoe.jpg')} />
            </View>
            <View style={[styles.details,styles.width2]}>
              <Text style={styles.fontsize}>Shoe Fest</Text>
              <Text style={{color:"green"}}>Upto 35% off</Text>
             </View>
           </View>
       </View>
       </TouchableOpacity>
      </View>
      </ScrollView>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  imagesizing:{
    width:120,
    height:140,
    marginLeft:10,
    marginTop:-5,
    },
  border:{
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
 width:'100%',
 marginTop:15,

},
container:{
  width:410,
  height:300,
  flex: 1,
  flexDirection:"row",
  marginTop:2,
  marginBottom:10,
},
logoname:{
  color:'white',
  paddingLeft:20,
  fontSize: 29,
  width:290,
  
},
  topmargin:{
    marginTop:10,
    },
  card: {
    alignItems: 'center',
    backgroundColor:"#F5F5F5",
    width:360,
    height:150,
    marginLeft:25,
    borderRadius:20,
    marginBottom:20,
    
  },
  flexrow:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:10,
  },
  fontsize:{
    fontSize:17,
    fontWeight:"900",
    color:'#FE4040'
  },
 details:{
 paddingLeft:50,
  marginTop:20
},
width1:{
  width:110,
  alignItems:"flex-start"
},
width2:{
  width:250,
 },
 offerrow:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-around",
  },
  offercolumn:{
  flex:1,
  flexDirection:"column",
  justifyContent:"space-around"
 },
});
