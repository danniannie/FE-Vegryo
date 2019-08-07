import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";

import { gardenDesign } from "../utils/utils";

export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    isLoading: true
  };
  render() {
    const { vegetables, isLoading } = this.state;
    const { selectedVeggies } = this.props.screenProps;

    return (
      <ScrollView >
        <Text style={{ fontFamily: 'Chewy-Regular', fontSize: 30, margin: 10, padding: 5 }}>Select your vegetables...</Text>
        {isLoading ? (
          <AnimatedCarrot />
        ) : (
            vegetables.map(vegetable => (
              <VeggieCard
                vegetable={vegetable}
                key={vegetable.id}
                handleAdd={this.props.screenProps.handleAdd}
                handleRemove={this.props.screenProps.handleRemove}
                veggieHere={selectedVeggies.hasOwnProperty(vegetable.id)}
              />
            ))
          )}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={this.onPress}
            style={{ borderWidth: 1, borderColor: "black", width: 300, height: 30, margin: 5, backgroundColor: '#5576B5' }}
          ><Text style={{ textAlign: 'center', padding: 5, color: 'white', fontFamily: 'B612Mono-Regular' }}>Build your Garden</Text></TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    api
      .getAllVeggies()
      .then(vegetables => this.setState({ vegetables, isLoading: false }));
  }

  onPress = () => {
    const { screenProps, navigation } = this.props;
    const vegetableLayout = gardenDesign(
      screenProps.selectedVeggies,
      screenProps.height,
      screenProps.width
    );
    screenProps.addVegetableLayout(vegetableLayout);
    navigation.navigate("MyGarden");
  };
}
