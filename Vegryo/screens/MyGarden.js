import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthSession } from "expo";

export default class MyGarden extends React.Component {
  state = {
    Veg: ["carrot", "broccoli", "emnkef"]
  };
  render() {
    const { Veg } = this.state;
    return (
      <View style={styles.square}>
        {Veg.map((veg, i) => {
          return (
            <View
              style={{
                width: "100%",
                height: `${100 / this.state.Veg.length}%`,
                borderColor: "red",
                borderStyle: "solid",
                borderWidth: 2
              }}
            >
              <Text>{Veg[i]}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  square: {
    width: 350,
    height: 350,
    backgroundColor: "#14ff5f"
  }
});
