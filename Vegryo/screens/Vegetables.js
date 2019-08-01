import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";
import gardenDesign from '../utils/utils'

export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    count: {},
    isLoading: true
  };
  render() {

    const { vegetables, count, isLoading } = this.state;


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
                count={count[vegetable.id]}
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
    const vegetableLayout = gardenDesign(this.state.vegetables, 100, 100)
    addVegetableLayout(vegetableLayout)
    this.props.navigation.navigate("MyGarden")
  }

  handleClick = (id, increment) => {
    const { count } = this.state;
    if (count[id]) {
      count[id] += increment;
    } else {
      count[id] = increment;
    }
    this.setState({ count });
  };
}
