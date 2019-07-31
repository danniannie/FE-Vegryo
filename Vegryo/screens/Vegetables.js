import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import AnimatedCarrot from "../components/LoadingCard";
import * as api from "../utils/api";

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
          onPress={() => {
            this.props.navigation.navigate("MyGarden");
          }}
        />
      </ScrollView>
    );
  }

  componentDidMount() {
    api
      .getAllVeggies()
      .then((vegetables) => this.setState({ vegetables, isLoading: false }));
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
