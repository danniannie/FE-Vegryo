import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Text>Hi</Text>
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
        title="Create Account"
        onPress={() => {
          props.navigation.navigate("CreateAccount");
        }}
      />
    </View>
  );
}
