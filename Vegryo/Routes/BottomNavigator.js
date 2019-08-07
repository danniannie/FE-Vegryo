import React, { Component } from "react";

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import MyGarden from "../screens/MyGarden1";
import Vegetables from "../screens/Vegetables";
import CreateAccount from "../screens/CreateAccount";
import WelcomePage from "../screens/WelcomePage";
import Icon from "react-native-vector-icons/Ionicons";


const HomeStack = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#cde8a4"
      },
      headerTintColor: "#484538"
    }
  }
);

const MyGardenStack = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#cde8a4"
      },
      headerTintColor: "#484538"
    }
  }
);

const VegetablesStack = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#cde8a4"
      },
      headerTintColor: "#484538"
    }
  }
);

const CreateAccStack = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#cde8a4"
      },
      headerTintColor: "#484538"
    }
  }
);




const BottomNav = createBottomTabNavigator(
  (paths = {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: () => <Icon name="ios-home" size={25} />
      }
    },
    Vegetables: {
      screen: VegetablesStack,
      navigationOptions: {
        tabBarIcon: () => <Icon name="ios-basket" size={25} />
      }
    },
    MyGarden: {
      screen: MyGardenStack,
      navigationOptions: {
        tabBarIcon: () => <Icon name="ios-flower" size={25} />
      }
    },
    CreateAccount: {
      screen: CreateAccStack,
      navigationOptions: () => ({
        tabBarIcon: () => <Icon name="ios-person" size={25} />
      })
    }
  },
  {
    tabBarOptions: {
      style: {
        activeColor: "#e91e63",
        backgroundColor: "white"
      }

    }
  }
);

export default createAppContainer(BottomNav);
