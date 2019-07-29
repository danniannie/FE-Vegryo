import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Button
        title="My Garden"
        onPress={() => {
          props.navigation.navigate("MyGarden");
        }}
      />
      <Button
        title="Vegetables"
        onPress={() => {
          props.navigation.navigate("Vegetables");
        }}
      />
      <Button
        title="Welcome Page"
        onPress={() => {
          props.navigation.navigate("WelcomePage");
        }}
      />
      <Button
        title="Create Account"
        onPress={() => {
          props.navigation.navigate("CreateAccount");
        }}
      />
    </View>
  );
}
