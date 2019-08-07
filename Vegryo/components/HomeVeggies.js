import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class HomeVeggies extends React.Component {
  render() {
    const { veg } = this.props;
    return (
      <View style={styles.veg}>
        <Text style={{ fontSize: 18 }}>
          {veg}: {"\n"}
        </Text>
        <Text>Your {veg}'s will be ready to harvest in X days.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  veg: {
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 40,
    borderRadius: 3
  }
});

export default HomeVeggies;
