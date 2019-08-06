import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeVeggies extends React.Component {
  render() {
    const { veg } = this.props;
    return (
      <View style={styles.veg}>
        <Text style={styles.vegHeader}>
          {veg}: {"\n"}
        </Text>
        <Text>Your {veg}'s will be ready to harvest in X days.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  veg: {
    backgroundColor: "pink",
    margin: 10,
    padding: 40
  },
  vegHeader: {
    fontSize: 18
  }
});

export default HomeVeggies;
