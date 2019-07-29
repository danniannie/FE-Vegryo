import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MyGarden(props) {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Button"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </View>
  );
}
