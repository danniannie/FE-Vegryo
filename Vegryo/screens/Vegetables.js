import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import * as api from '../utils/api'




export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
    count: {}
  }
  render() {

    const { vegetables, count } = this.state
    return (
      <ScrollView>
        {vegetables.map((vegetable) =>
          <VeggieCard vegetable={vegetable} key={vegetable.id} handleClick={this.handleClick} count={count[vegetable.id]}></VeggieCard>
        )}
        <Button title='Build your Garden' onPress={() => {
          this.props.navigation.navigate("MyGarden");
        }}></Button>
      </ScrollView>
    );
  }


  componentDidMount() {
    api.getAllVeggies().then(vegetables => this.setState({ vegetables }))
  }

  handleClick = (id, increment) => {
    const { count } = this.state
    if (count[id]) {
      count[id] += increment
    }
    else {
      count[id] = increment
    }
    this.setState(({ count }))
  }
}
