import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import MyGarden from "./screens/MyGarden";

const appStack = createStackNavigator({
  Home,
  MyGarden
});

export default createAppContainer(appStack);
