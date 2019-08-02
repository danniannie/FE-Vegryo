import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

class MyGarden extends Component {
  state = {
    data: ["carrot", "broccoli", "asparagus", "leek", "cabbage", "potato"].map(
      (d, index) => ({
        key: `item-${index}`,
        label: d
      })
    ),
    selectedVeg: ""
  };

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View style={{ height: 400 / this.state.data.length }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isActive ? "rgba(104,120,43,0.6)" : null,
            margin: 5,
            borderRadius: 2
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
    const Soil =
      "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e7c4af71-cdf1-4627-bfc2-5e9e4500ee10_scaled.jpg";
    return (
      <View>
        <View style={{ height: 400, margin: 10 }}>
          <Image
            style={{
              borderRadius: 2,
              width: "100%",
              height: 400,
              position: "absolute",
              zIndex: 0
            }}
            source={{
              uri: Soil
            }}
          />
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            scrollPercent={5}
            onMoveEnd={({ data }) => this.setState({ data })}
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
