import React, { Component } from "react";
<<<<<<< HEAD
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
=======
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

>>>>>>> 89c7d57b7078ea4e9b461695f73cc1f8091e76b1
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
  })

const MyGardenStack = createStackNavigator(
  {
    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  })

const VegetablesStack = createStackNavigator(
  {

    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  })

const CreateAccStack = createStackNavigator(
  {

    Home: { screen: WelcomePage },
    MyGarden: { screen: MyGarden },
    Vegetables: { screen: Vegetables },
    CreateAccount: { screen: CreateAccount }
  })

const BottomNav = createBottomTabNavigator(
  (paths = {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color="#484538" size={25} />
        )
      }
    },
    Vegetables: {
      screen: VegetablesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-leaf" color="#484538" size={25} />
        )
      }
    },
    MyGarden: {
      screen: MyGardenStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-flower" color="#484538" size={25} />
        )
      }
    },
    CreateAccount: {
      screen: CreateAccStack,
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
