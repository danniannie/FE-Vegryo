import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import AppNavigator from "./Routes/AppNavigator";

export default class App extends Component {
  state = {
    vegetableLayout: [],
    height: 100,
    width: 100,
    selectedVeggies: {}
  };

  render() {
    return (
      <AppNavigator
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

// const BottomNav = createBottomTabNavigator(
//   (paths = {
//     Home: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="ios-home" color="#484538" size={25} />
//         )
//       }
//     },
//     Vegetables: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="md-leaf" color="#484538" size={25} />
//         )
//       }
//     },
//     MyGarden: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="ios-flower" color="#484538" size={25} />
//         )
//       }
//     },
//     CreateAccount: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="ios-person" color="#484538" size={25} />
//         )
//       }
//     }
//   }),
//   {
//     tabBarOptions: {
//       activeTintColor: "#ffa03a",
//       inactiveTintColor: "#484538"
//     }
//   }
// );

// export default createAppContainer(BottomNav);
