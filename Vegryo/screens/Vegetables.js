import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import VeggieCard from "../components/VeggieCard";
import * as api from '../utils/api'


export default class Vegetables extends React.Component {
  state = {
    vegetables: [],
  }

  render() {
    const { vegetables } = this.state
    return (
      <ScrollView>
        {vegetables.map((vegetable) =>
          <VeggieCard vegetable={vegetable} key={vegetable.id}></VeggieCard>
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
}
