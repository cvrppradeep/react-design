import React from 'react';
import {
  Image,
  Platform,
StyleSheet,
ScrollView,
Text,
 View,TouchableOpacity
} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
    <ScrollView >
    <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.info}>Mobile No.</Text>
              <Text style={styles.description}>Address</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignupPage')}>
                <Text>Edit Profile</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}onPress={() => this.props.navigation.navigate('Cart')}>
                <Text>My Orders</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Log out</Text> 
              </TouchableOpacity>
            </View>
        </View>
</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2F1",
    marginTop:24,
  },
  header:{
    backgroundColor: "#64FFDA",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#E0F2F1",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1DE9B6",
  },
});
