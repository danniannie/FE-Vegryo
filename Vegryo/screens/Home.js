import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Text>Hi</Text>
      <Button
        title="Button"
        onPress={() => {
          props.navigation.navigate("MyGarden");
        }}
      />
    </View>
  );
}
