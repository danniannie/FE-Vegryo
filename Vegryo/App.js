import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import AppNavigator from "./Routes/AppNavigator";

class App extends Component {
  state = {
    vegetableLayout: [],
    height: 0,
    width: 0
  };
  render() {
    return (
      <AppNavigator
        screenProps={{
          addVegetableLayout: this.addVegetableLayout,
          addDimensions: this.addDimensions,
          height: this.state.height,
          width: this.state.width
        }}
      />
    );
  }
  addVegetableLayout = (vegetableLayout) => {
    this.setState({ vegetableLayout });
  };
  addDimensions = (height, width) => {
    this.setState({ height, width });
  };
}

const BottomNav = createBottomTabNavigator(
  (paths = {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color="#484538" size={25} />
        )
      }
    },
    Vegetables: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-leaf" color="#484538" size={25} />
        )
      }
    },
    MyGarden: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-flower" color="#484538" size={25} />
        )
      }
    },
    CreateAccount: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color="#484538" size={25} />
        )
      }
    }
  }),
  {
    tabBarOptions: {
      activeTintColor: "#ffa03a",
      inactiveTintColor: "#484538"
    }
  }
);

export default createAppContainer(BottomNav);
