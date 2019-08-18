import React, { PureComponent } from 'react';
import { View } from 'react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button';

export default class LoadingButton extends PureComponent {
  _onPressHandler() {
    this.loadingButton.showLoading(true);
    console.log('Pressed!');
    this.props.navigation.navigate('SuccessPage')
    
    // mock
    setTimeout(() => {
      this.loadingButton.showLoading(false);
    }, 2000);
      

  }
 
  render() {
    return (
      <View style={{paddingBottom:5}}>
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
      </View>
    );
  }
}