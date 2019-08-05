import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as api from "../utils/api";

class HomeVeggies extends React.Component {
  render() {
    const { veg } = this.props;
    return (
      <View>
        <Text style={styles.veg}>{veg}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  veg: {
    backgroundColor: "pink",
    margin: 10,
    padding: 40
  }
});

export default HomeVeggies;
