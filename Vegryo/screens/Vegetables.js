import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import VeggieCard from "../components/VeggieCard";
import * as api from '../utils/api'

export default class Vegetables extends React.Component {
  state = {
    vegetables: []
  }
  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Vegetables page</Text>
        <VeggieCard />
      </View>
    );
  }


  componentDidMount() {
    api.getAllVeggies().then(vegetables => this.setState({ vegetables }))


  }
}
