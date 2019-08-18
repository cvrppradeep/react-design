import React, { PropTypes } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  Component,
  AppRegistry
} from "react-native";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CartButton from "../components/CartButton";
import Profile from "../components/Profile";
import SuccessPage from "../components/SuccessPage";
export default class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.mainviewStyle}>
        <ContainerView />
        <View style={styles.footer}>
          {/* <TouchableHighlight style={styles.bottomButtons}><Text style={styles.footerText}>A</Text></TouchableHighlight><TouchableHighlight style={styles.bottomButtons}><Text style={styles.footerText}>B</Text></TouchableHighlight> */}
          <View style={styles.flexcolumn}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cart")}
              >
                <Image
                  style={styles.imagesizing}
                  source={require("../assets/images/food.jpeg")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Footercolumn}>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 0 }}>
                  Total Amount
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 40 }}>₹27.00</Text>
              </View>
            </View>
            <View>
              <Button
                onPress={() => this.props.navigation.navigate("SuccessPage")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
class ContainerView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Navbar />
          </View>
          <View style={styles.welcomeContainer}>
            <View style={styles.flexrow}>
              <View style={{}}>
                <Image
                  style={styles.imagesizing}
                  source={require("../assets/images/food.jpeg")}
                />
              </View>
              <View style={styles.details}>
                <Text
                  onPress={() => console.log("Test")}
                  style={styles.fontsize}
                >
                  Green Salad
                </Text>
              </View>
              <View style={styles.price}>
                <View style={styles.flexcolumn}>
                  <View>
                    <Text style={styles.fontsize}>₹ 27.00</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <CartButton />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  mainviewStyle: { flex: 1, flexDirection: "column" },
  footer: {
    position: "absolute",
    flex: 0.1,
    left: 5,
    right: 5,
    bottom: 0,
    backgroundColor: "#80CBC4",
    flexDirection: "row",
    height: 100,
    alignItems: "center"
  },
  bottomButtons: { alignItems: "center", justifyContent: "center", flex: 1 },
  footerText: {
    color: "red",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18
  },
  textStyle: { alignSelf: "center", color: "orange" },
  scrollViewStyle: { borderWidth: 2, borderColor: "blue" },
  container: { flex: 1, backgroundColor: "#E0F2F1", flexDirection: "row" },
  nav: {
    flex: 1,
    width: 500,
    backgroundColor: "#26A69A",
    alignItems: "stretch",
    height: 50
  },
  flexrow: { flex: 1, flexDirection: "row", alignItems: "center" },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 1,
    backgroundColor: "#fff",
    width: 400,
    height: 100,
    marginLeft: 5,
    marginRight: 5
  },
  getStartedContainer: { alignItems: "center", marginHorizontal: 50 },
  productflexrow: { flex: 1, flexDirection: "row", alignItems: "center" },
  imagesizing: { width: 100, height: 80, marginLeft: 20 },
  fontsize: { fontSize: 15, fontWeight: "900" },
  details: { paddingLeft: 30, marginTop: -50 },
  price: { paddingLeft: 60, marginTop: 17 },
  flexcolumn: { flex: 1, flexDirection: "column", alignItems: "center" },
  Footercolumn: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 20
  }
});
AppRegistry.registerComponent("TRYAPP", () => mainview);