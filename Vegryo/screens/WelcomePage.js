import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Weather from "../components/Weather";
import HomeVeggies from "../components/HomeVeggies";
import * as api from "../utils/api";

class WelcomePage extends React.Component {
  state = {
    veg: [],
    dateplanted: {}
  };

  render() {
    return (
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            padding: 35,
            fontSize: 20,
            backgroundColor: "green"
          }}
        >
          Welcome fellow Gardener!
        </Text>

        <Weather />
        {this.state.veg.map(veggies => (
          <HomeVeggies
            key={veggies}
            veg={veggies}
            date={this.state.dateplanted[veggies]}
          />
        ))}
      </ScrollView>
    );
  }
  componentDidMount = () => {
    this.fetchUser();
  };
  fetchUser = async () => {
    const data = await api.getUserbyID();
    this.setState({
      veg: Object.keys(data.data.Garden),
      dateplanted: data.data.Garden
    });
  };
}

export default WelcomePage;
