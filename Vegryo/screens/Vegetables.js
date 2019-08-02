import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";
import gardenDesign from "../utils/utils";
import { update, Object } from "tcomb";

export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    isLoading: true
  };
  render() {
    const { vegetables, isLoading } = this.state;

    return (
      <ScrollView>
        {isLoading ? (
          <AnimatedCarrot />
        ) : (
          vegetables.map(vegetable => (
            <VeggieCard
              vegetable={vegetable}
              key={vegetable.id}
              handleAdd={this.props.screenProps.handleAdd}
              handleRemove={this.props.screenProps.handleRemove}
              disabled={this.props.screenProps.disabled}
              disabledRemove={this.props.screenProps.disabledRemove}
              buttonState={this.props.screenProps.buttonState}
            />
          ))
        )}
        <Button title="Build your Garden" onPress={this.onPress} />
      </ScrollView>
    );
  }

  componentDidMount() {
    api
      .getAllVeggies()
      .then(vegetables => this.setState({ vegetables, isLoading: false }));
  }

  onPress = () => {
    const {
      addVegetableLayout,
      height,
      width,
      selectedVeggies
    } = this.props.screenProps;
    const vegetableLayout = gardenDesign(selectedVeggies, height, width);
    addVegetableLayout(vegetableLayout);
    this.props.navigation.navigate("MyGarden");
  };

  // handleAdd = (id, spacing) => {
  //   const { selectedVeggies } = this.state;

  //   if (!selectedVeggies[id]) {
  //     selectedVeggies[id] = spacing;
  //     this.setState({ selectedVeggies });
  //   }
  // };

  // handleRemove = (id) => {
  //   const { selectedVeggies } = this.state;

  //   if (selectedVeggies[id]) {
  //     delete selectedVeggies[id];

  //     this.setState({ selectedVeggies });
  //   }
  // };
}
