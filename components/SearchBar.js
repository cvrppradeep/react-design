import React, { Component } from 'react';
import { StyleSheet,ImageBackground, TextInput, Image,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    
  }

  render() {
    return (
      <View  style={{justifyContent: 'center',paddingHorizontal:5}}>
      {/* <ImageBackground source={require('../assets/images/search.png')} style={styles.inputIcon} > */}

      {/* <Image style={styles.inputIcon} source={require('../assets/images/search.png')}/> */}
      {/* <TextInput
        style={{paddingLeft:10,marginLeft:20,height: 35, backgroundColor:'white',borderRadius: 40, borderWidth: 1,width:250,borderColor:'white',color:'gray'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
       />
       </ImageBackground> */}
       <Animatable.View animation="slideInRight" duration={500} style={{height: 40,width:320, backgroundColor: 'white',borderRadius: 40,flexDirection: 'row',padding: 5, alignItems: 'center'}}>
<Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{fontSize: 24,marginLeft:10,}} />
<TextInput placeholder="search" style={{fontSize: 17,marginLeft:15}}/>
       </Animatable.View>
</View>

    );
  }
}
const styles = StyleSheet.create({
inputIcon:{
  width:30,
  height:30,
  marginLeft:10,
  justifyContent: 'center',
  backgroundColor:"white",
  borderRadius: 40
},
productflexrow:
  {
    flex:1,
flexDirection:"row",
alignItems:"center",
  },
})