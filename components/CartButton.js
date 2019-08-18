import React from 'react';
import {
  Image,
  
StyleSheet,

Text,
 View,TextInput,AppRegistry,TouchableHighlight
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressadd = () => {
    this.setState({
      count: this.state.count+1
    })
  }
    onPressminus = () => {
      this.setState({
        count: this.state.count-1
      })
  }
  addtocart = () => {
    this.setState({
      count: this.state.count+1
    })
};
render() {
    return (
      <View style={styles.container}>
      {/* <View>
      <TouchableHighlight
         style={{height:30,width:30,borderRadius: 40,marginTop:-35}}>
        
       <View >
        <Image className={css(webStyles.link)}  style={{width:30,height:30}} source={require('../assets/images/addblack.png')} />
         </View>
        </TouchableHighlight>
      </View> */}
       <View style={styles.flexrow}>
       <TouchableHighlight 
         style={{height:30,width:30,borderRadius: 40}}

onPress={this.onPressminus} 
        >
        <View>
        <Image  style={{width:30,height:30,marginRight:20,marginLeft:1}} source={require('../assets/images/minusblack.png')} />
         </View>
         </TouchableHighlight>
      
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            { this.state.count !== 0 ? this.state.count: 0}
          </Text>
        </View>
        <TouchableHighlight
         style={{height:30,width:30,borderRadius: 40}}
         onPress={this.onPressadd}
        >
       
<View>
        <Image  style={{width:30,height:30,marginLeft:1}} source={require('../assets/images/addblack.png')} />
         </View>
        </TouchableHighlight>
      
      </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 1
  },
  
  
  countContainer: {
    alignItems: 'center',
    marginLeft:10,
    marginTop:3,
    marginRight:10,
  },
  countText: {
    color: 'black'
  },
  flexrow:{
    flex:1,
    flexDirection:"row",
  },
  someButtonStyle:{
   width:50,
height:50,
  }
  
})

AppRegistry.registerComponent('App', () => App)
