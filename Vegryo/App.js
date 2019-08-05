import React, { Component } from "react";
import BottomNavigator from "./Routes/BottomNavigator";

export default class App extends Component {
  state = {
    vegetableLayout: [],
    height: 100,
    width: 100,
    selectedVeggies: {}
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
          selectedVeggies: this.state.selectedVeggies
        }}
      />
    );
  }
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

  handleRemove = id => {
    const { selectedVeggies } = this.state;

    if (selectedVeggies[id]) {
      delete selectedVeggies[id];

      this.setState({ ...selectedVeggies, selectedVeggies });
    }
  };
}

