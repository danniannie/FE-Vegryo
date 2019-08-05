import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { getUserById } from "../utils/api.js";

export default class VeggieInfo extends Component {
  state = {
    user: "Old McDonald"
  };
  render() {
    const {
      selectedVeg,
      seedLookUp,
      gardenHeight,
      ammountOfVeg,
      gardenWidth
    } = this.props;
    return (
      <View
        style={{
          width: "90%",
          height: 80,
          backgroundColor: "beige",
          margin: 20
        }}
      >
        <Text>
          {selectedVeg}
          {selectedVeg ? ": " : null}
          {seedLookUp[selectedVeg]}
          {"\n"}
          {selectedVeg
            ? `Row Height: ${Math.floor(gardenHeight / ammountOfVeg)}cm`
            : null}
          {"\n"}
          {selectedVeg ? `Row Width: ${Math.floor(gardenWidth)}cm` : null}
        </Text>
        {selectedVeg ? (
          <ProgressBar progress={0.4} width={200} color={"#FFA03A"} />
        ) : null}
      </View>
    );
  }

  componentDidMount = () => {
    getUserById().then(user => console.log(user));
  };
}
