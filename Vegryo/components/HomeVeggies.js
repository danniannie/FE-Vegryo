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
    return (
      <View style={styles.veg}>
        <Image
          style={{ width: 70, height: 70, marginRight: 15 }}
          source={{ uri: icon }}
          resizeMode="contain"
        />

        <Text>
          Your {veg}'s will be ready to harvest{"\n"} in{" "}
          {Math.floor(daysGrown(date))} days.
        </Text>
      </View>
    );
  }

  componentDidMount() {
    this.fetchPic();
  }
  fetchPic = async () => {
    const { veg } = this.props;
    const data = await api.getPicturebyId(veg);
    this.setState({ icon: data });
  };
}
const styles = StyleSheet.create({
  veg: {
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 20,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default HomeVeggies;
