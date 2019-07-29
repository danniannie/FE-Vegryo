import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import VeggieCard from "../components/VeggieCard";

export default class Vegetables extends React.Component {
  render() {
    return (
      <View>
        <Text>Vegetables page</Text>
        <VeggieCard />
      </View>
    );
  }
}
