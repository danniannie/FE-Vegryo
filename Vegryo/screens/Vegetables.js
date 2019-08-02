import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";
import gardenDesign from "../utils/utils";

export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    isLoading: true
  };
  render() {
    const { vegetables, isLoading } = this.state;
    const { selectedVeggies } = this.props.screenProps;

    return (
      <ScrollView>
        {isLoading ? (
          <AnimatedCarrot />
        ) : (
          vegetables.map(vegetable => (
            //componentdid mount will look at veggie card and update button status

            <VeggieCard
              vegetable={vegetable}
              key={vegetable.id}
              handleAdd={this.props.screenProps.handleAdd}
              handleRemove={this.props.screenProps.handleRemove}
              veggieHere={selectedVeggies.hasOwnProperty(vegetable.id)}
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
    const { screenProps, navigation } = this.props;
    const vegetableLayout = gardenDesign(
      this.state.selectedVeggies,
      screenProps.height,
      screenProps.width
    );
    screenProps.addVegetableLayout(vegetableLayout);
    navigation.navigate("MyGarden");
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
