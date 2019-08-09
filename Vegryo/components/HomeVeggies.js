import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as api from "../utils/api";
import { daysGrown } from "../utils/utils";

class HomeVeggies extends React.Component {
  state = {
    growTime: {
      Carrot: 70,
      Potato: 70,
      Asparagus: 60,
      Broccoli: 150,
      Sprouts: 180,
      Cabbage: 90
    },
    icon: "..."
  };
  render() {
    const { icon, growTime } = this.state;
    const { veg, date } = this.props;

    return (
      <View style={styles.veg}>
        <Image
          style={styles.image}
          source={{
            uri: icon
          }}
          resizeMode="contain"
        />

        {growTime[veg] - daysGrown(date) <= 0 ? (
          <View>
            <Text style={styles.text}>
              Your {veg} crops are ready
              {"\n"}to harvest!
            </Text>
          </View>
        ) : (
          <Text style={styles.text}>
            Your {veg} crops will be {"\n"}ready to harvest in{" "}
            {growTime[veg] - Math.floor(daysGrown(date))} days.
          </Text>
        )}
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
  },
  text: {
    fontFamily: "B612Mono-Regular",
    fontSize: 13
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15
  }
});

export default HomeVeggies;
