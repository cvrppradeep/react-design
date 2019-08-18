import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import axios from 'axios';

import { hidden } from 'ansi-colors';

export default class Loginpage extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
    super();
    this.state = {showOTP:true,phone:null}
    
  }
  
  onclickView=async() => {
  Alert.alert("Alert", "OTP send Successfully"+this.state.phone);
  // console.log(API+`/api/users/phone/" + this.state.phone)
// const res=await  axios.get(API+'/api/users/phone/'+ this.state.phone)
    //  console.log(JSON.stringify(res.data));
    // this.setState({showOTP:true})
  if(this.state.showOTP==true)
  {
  try {
    this.loading = true;
    const res=await  axios.get(API+'/api/users/phone/'+ this.state.phone)
    console.log(JSON.stringify(res.data));
    if (otp.status == 200 || otp.status == 201) {
      this.showOTP = true;
      this.msg = "Please enter OTP sent to your Mobile";
      this.refs.phone.focus();
      return;
  }
}
  catch (e) {
  this.setState({showOTP:false})
    if (e && e.response && e.response.data) {
      this.err = e.response.data._message || e.response.data.msg;
      this.msg = this.err;
    }
    // this.$store.commit("setErr", this.err);
    return;
  } finally {
    this.loading = false;
  }
}
  else
  {
    this.setState({showOTP:true})
    // try {
    //   this.loading = true;
    //   // const password =this.password  ;
    //  let res= await this.axios.post('auth/local',{phone:this.state.phone,
    //    password:this.state.password
    // });
    //   console.log(res.data)
    //   if (status == 200 || status == 201) {
    //     this.store.commit("success", "Verified! Thank You.");
    //     this.router.push("/checkout");
    //   }
    //   // this.showOTP = false;
    // } catch (e) {}
    // finally {
    //   this.loading = false;
    // }
  }
  
  
}

  // onClickListener = (viewId) => {
  //   // Alert.alert("Alert", "Login Successful"+viewId);
  
  // }
  // onClick = (viewId) => {
  //   Alert.alert("Alert", "OTP send Successfully");
    
  // }
  onChanged(text){
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
        alert("please enter numbers only");
        }
    }
    this.setState({ phone: text })
}
LoginButtonPress=async() => {
// console.error(API+'/api/auth/local')
  // if( this.setState({showOTP:true}))
  
   try {
    // const password =this.password  ;
   let res= await axios.post(API+'/api/auth/local',{
     phone:this.state.phone,
     password:this.state.password
  });
  
    if (res.status == 200 || res.status == 201) {
      this.props.navigation.navigate('MainPage')
    }
    Alert.alert("Login Successfully");
  }
  catch (e) {
    Alert.alert("Password doesn't match");

    console.log(e)
}

  } 
render() {
    return (
      
      <View style={styles.container}>
    
    {this.state.showOTP ?<View>
    
     <View style={styles.inputContainer}>
   
    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/phone.png'}}></Image>

      <TextInput 
          style={styles.inputs}
              placeholder="Phone no."
              autoFocus={true}
              keyboardType='numeric'
             
              underlineColorAndroid='transparent'
              maxLength={10}
              //value={this.state.phone}
              onChangeText={(text)=> this.onChanged(text)}
              >
              </TextInput>
          </View> 
        
        <TouchableHighlight style={[styles.buttonContainer,styles.OTPButton]}  onPress={this.onclickView}>
          <Text style={styles.loginText}>Send OTP</Text>
        </TouchableHighlight>
      
        </View>
      :
        <View>
          
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Enter OTP"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.LoginButtonPress} >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
</View>}
        {/* <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight   style={styles.signup} onPress={() => this.props.navigation.navigate('SignupPage')}>
            <Text>Sign Up</Text>
        </TouchableHighlight> */}
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2F1",
    marginTop:24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent: 'center'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
},
loginButton: {
  backgroundColor: "#E53935",
},
OTPButton: {
  backgroundColor: "#40C4FF",
},
loginText: {
  color: 'white',
},
signup:{
  height:30,width:50
}
});
