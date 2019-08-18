import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { NativeRouter, Route, Link,View,styles } from "react-router-native";

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

const App = createStackNavigator({
      Home: HomeScreen,
      LoginPage: LoginPage,
    
});
// const App = () => (
//   <NativeRouter>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Home</Text>
//         </Link>
//         <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>About</Text>
//         </Link>
//         <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
//           <Text>Topics</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </View>
//   </NativeRouter>
// );



      export default App;