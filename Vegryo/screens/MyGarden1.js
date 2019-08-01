import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

class MyGarden extends Component {
  state = {
    data: ["carrot", "broccoli", "lsl", "kdk"].map((d, index) => ({
      key: `item-${index}`,
      label: d,
      backgroundColor: "red"
    })),
    selectedVeg: ""
  };

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    console.log(item);
    return (
      <View style={{ height: 400 / this.state.data.length }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isActive ? "blue" : item.backgroundColor
          }}
          onPress={() => {
            this.setState({ selectedVeg: item.label });
          }}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
              height: "100%"
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <View style={{ height: 400, margin: 10 }}>
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}
            style={{
              backgroundColor: "pink"
            }}
          />
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

export default MyGarden;
