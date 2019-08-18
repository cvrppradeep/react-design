import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListingPage from '../components/ListingPage';
import Profile from '../components/Profile';
import Cart from '../components/Cart';
import DetailsPage from '../components/DetailsPage'
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import SuccessPage from '../components/SuccessPage';
import MainPage from '../components/MainPage';
import OrderDetails from '../components/OrderDetails'
const HomeStack = createStackNavigator({
  
  MainPage:MainPage,
  ListingPage: ListingPage,
  SignupPage: SignupPage,
  Navbar: Navbar,
  SuccessPage: SuccessPage,
  Products:Products,
  Cart:Cart,
  OrderDetails:OrderDetails,
  Profile: Profile,
  DetailsPage:DetailsPage,

});
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } 
      onPress={() => this.props.navigation.navigate('Mainpage',{ 
        hideTabBar: true} )}
    />
  ),
};
const CartStack = createStackNavigator({
  Cart: Cart,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? (focused ? 'ios-cart' : 'ios-cart-outline') : 'md-cart' } 
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: Profile,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      // name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      name={ Platform.OS === 'ios' ? (focused ? 'ios-contact' : 'ios-contact-outline') : 'md-contact'  }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CartStack,
  ProfileStack,
  
  
});
