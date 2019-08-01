import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class MyGarden extends React.Component {
  state = {
    Veg: ["carrot", "broccoli", "potato", "asparagus"],
    selectedVeg: ""
  };
  render() {
    const { Veg } = this.state;

    return (
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <View style={styles.square}>
          {Veg.map((veg, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedVeg: veg });
                }}
                key={veg}
                style={{
                  width: "100%",
                  height: `${100 / this.state.Veg.length}%`,
                  padding: 2
                }}
              >
                <View
                  style={{
                    borderColor: "red",
                    borderStyle: "solid",
                    borderWidth: 2,
                    height: "100%"
                  }}
                >
                  <Text>{Veg[i]}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            width: "90%",
            height: 80,
            backgroundColor: "beige",
            margin: 20
          }}
        >
          <Text>{this.state.selectedVeg}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    margin: 10,
    width: 350,
    height: 400,
    backgroundColor: "#14ff5f"
  }
});
