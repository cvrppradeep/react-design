import React from 'react';
import {
    Image,
  
  StyleSheet,
  ScrollView,
  Text,
  View,TextInput,
} from 'react-native';

export default class SlideMenu extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        
     <View style={{heigt:10,width:60,marginLeft:20,borderColor:'white'}}>
     
<View style={{flex:2,}} >
<Image source={this.props.imageUri} style={{flex:1,width:60,height:30, borderRadius:50,shadowColor: 'blue',
    shadowOffset: {
      width: 60,
      height: 30
    },
    shadowRadius: 10,
    shadowOpacity: 1.0}}/>
</View>
<View style={{flex:1,alignItems:'center',paddingTop:10}}>
<Text style={{fontSize: 10}}>
{this.props.name}
</Text>
</View>

     </View>
    );
  }
}
const styles = StyleSheet.create({
  
});
