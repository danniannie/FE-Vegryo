import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";
import gardenDesign from '../utils/utils'

export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    selectedVeggies: [],
    isLoading: true
  };
  render() {

    const { vegetables, isLoading } = this.state;


    return (
      <ScrollView>
        {isLoading ? (
          <AnimatedCarrot />
        ) : (
            vegetables.map((vegetable) => (
              <VeggieCard
                vegetable={vegetable}
                key={vegetable.id}
                handleClick={this.handleClick}
              />
            ))
          )}
        <Button
          title="Build your Garden"
          onPress={this.onPress}
        />
      </ScrollView>
    );
  }

  componentDidMount() {
    api
      .getAllVeggies()
      .then((vegetables) => this.setState({ vegetables, isLoading: false }));
  }

  onPress = () => {
    const { addVegetableLayout } = this.props.screenProps
    const vegetableLayout = gardenDesign(this.state.selectedVeggies, 100, 100)
    addVegetableLayout(vegetableLayout)
    this.props.navigation.navigate("MyGarden")
  }

  handleClick = (id, spacing) => {
    const { selectedVeggies } = this.state;
    if (!selectedVeggies.includes(id)) {
      selectedVeggies.push({ [id]: spacing })
    }
    console.log(selectedVeggies)
    this.setState({ selectedVeggies });
  };
}


//take the vegetable name
//check if its already in the array
// if it 
