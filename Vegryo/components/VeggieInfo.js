import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";

export default class VeggieInfo extends Component {
  state = {};
  render() {
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
          {this.props.selectedVeg}
          {this.props.selectedVeg ? ": " : null}
          {this.props.seedLookUp[this.props.selectedVeg]}
          {"\n"}
          {this.props.selectedVeg
            ? `Row Height: ${Math.floor(
                this.props.gardenHeight / this.props.ammountOfVeg
              )}cm`
            : null}
          {"\n"}
          {this.props.selectedVeg
            ? `Row Width: ${Math.floor(this.props.gardenWidth)}cm`
            : null}
        </Text>
        {this.props.selectedVeg ? (
          <ProgressBar progress={0.4} width={200} color={"#FFA03A"} />
        ) : null}
      </View>
    );
  }
}
