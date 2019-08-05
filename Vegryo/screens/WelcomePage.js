import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Weather from "../components/Weather";
import HomeVeggies from "../components/HomeVeggies";
import VeggieBar from "../components/VeggieBar";
import * as api from "../utils/api";

class WelcomePage extends React.Component {
  state = {
    veg: []
  };
  render() {
    return (
      <ScrollView>
        <Weather />
        {this.state.veg.map(veggies => (
          <HomeVeggies key={veggies} veg={veggies} />
        ))}
        <VeggieBar />
      </ScrollView>
    );
  }
  componentDidMount = () => {
    this.fetchUser();
  };
  fetchUser = async () => {
    const data = await api.getUserbyID();
    this.setState({ veg: Object.keys(data.data.Garden) });
  };
}

export default WelcomePage;
