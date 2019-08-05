import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const VeggieBar = () => {
  return (
    <View style={styles.veggiebar}>
      <Text>Veggie Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  veggiebar: {
    backgroundColor: "green",
    margin: 5,
    height: 50
  }
});
export default VeggieBar;
