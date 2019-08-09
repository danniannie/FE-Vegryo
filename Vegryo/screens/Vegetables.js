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
      <ScrollView
        style={{
          marginBottom: 0,
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
          height: "100%"
        }}
      >
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
    margin: 5,
    height: 40,
    backgroundColor: "#5576B5",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    width: "100%"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "B612Mono-Regular"
  }
});
