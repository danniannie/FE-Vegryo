import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as api from "../utils/api";
import { daysGrown } from "../utils/utils";

class HomeVeggies extends React.Component {
  state = {
    icon: []
  };
  render() {
    const { icon } = this.state;
    const { veg, date } = this.props;
    const pic = icon[2];
    return (
      <View style={styles.veg}>
        <Image
          style={{ width: 70, height: 70, marginRight: 7 }}
          source={{ uri: pic }}
          resizeMode="center"
        />
        <Text>
          Your {veg}'s will be ready to harvest{"\n"} in{" "}
          {Math.floor(daysGrown(date))} days.
        </Text>
      </View>
    );
  }

  componentDidMount = () => {
    api.getAllVeggies().then(veggie => {
      this.setState({
        icon: veggie.map(veggie => {
          return veggie.data.Picture;
        })
      });
    });
  };
}
const styles = StyleSheet.create({
  veg: {
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 30,
    borderRadius: 3,
    flexDirection: "row",

    alignItems: "center"
  }
});

export default HomeVeggies;
