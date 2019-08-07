import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
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
              veggieHere={selectedVeggies.hasOwnProperty(vegetable.id)}
            />
          ))
        )}
        {isLoading ? null : (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={this.onPress} style={styles.button}>
              <Text style={styles.buttonText}>Build your Garden</Text>
            </TouchableOpacity>
          </View>
        )}
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
    const body = {
      text: {
        GardenLayout: vegetableLayout
      }
    };

    screenProps.addVegetableLayout(vegetableLayout);
    api.patchToUser(screenProps.user, body);
    navigation.navigate("MyGarden");
  };
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "white",
    width: "100%",
    height: 40,
    margin: 5,
    backgroundColor: "#5576B5",
    justifyContent: "center"
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontFamily: "B612Mono-Regular"
  }
});
