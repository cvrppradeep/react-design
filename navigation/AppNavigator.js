import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Pagenavigator from './Pagenavigator';
import { NativeRouter, Route, Link,View,styles } from "react-router-native";

import MainTabNavigator from './MainTabNavigator';
import ListingPage from '../components/ListingPage';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main:Pagenavigator ,
  MainPage:MainTabNavigator
  
}));