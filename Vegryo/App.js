import React, { Component } from "react";
import BottomNavigator from "./Routes/BottomNavigator";
import * as Font from "expo-font";

export default class App extends Component {
  state = {
    vegetableLayout: [],
    height: 0,
    width: 0,
    selectedVeggies: {},
    fontLoaded: false,
    user: "Samantha",
    plantDates: {}
  };

  render() {
    return (
      <BottomNavigator
        screenProps={{
          addVegetableLayout: this.addVegetableLayout,
          addDimensions: this.addDimensions,
          height: this.state.height,
          width: this.state.width,
          vegetableLayout: this.state.vegetableLayout,
          handleAdd: this.handleAdd,
          handleRemove: this.handleRemove,
          selectedVeggies: this.state.selectedVeggies,
          addUser: this.addUser,
          user: this.state.user,
          plantDates: this.state.plantDates,
          addPlantDate: this.addPlantDate
        }}
      />
    );
  }

  addPlantDate = plantDates => {
    this.setState({ plantDates });
  };

  addVegetableLayout = vegetableLayout => {
    this.setState({ vegetableLayout });
  };
  addDimensions = (height, width) => {
    this.setState({ height, width });
  };

  handleAdd = (id, spacing) => {
    const { selectedVeggies } = this.state;

    if (!selectedVeggies[id]) {
      selectedVeggies[id] = spacing;
      this.setState({ ...selectedVeggies, selectedVeggies });
    }
  };

  addUser = user => {
    this.setState({ user });
  };

  handleRemove = id => {
    const { selectedVeggies } = this.state;

    if (selectedVeggies[id]) {
      delete selectedVeggies[id];

      this.setState({ ...selectedVeggies, selectedVeggies });
    }
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      "JustAnotherHand-Regular": require("./assets/fonts/JustAnotherHand-Regular.ttf"),
      "B612Mono-Regular": require("./assets/fonts/B612Mono-Regular.ttf"),
      "Chewy-Regular": require("./assets/fonts/Chewy-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  };
}
