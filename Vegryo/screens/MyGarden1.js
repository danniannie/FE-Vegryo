import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

class MyGarden extends Component {
  state = {
    seedLookUp: this.props.screenProps.vegetableLayout.reduce((acc, veg) => {
      return { ...acc, [Object.keys(veg)]: Object.values(veg) };
    }, {}),
    data: this.props.screenProps.vegetableLayout
      .reduce((acc, veg) => {
        let key = Object.keys(veg);
        return [...acc, key];
      }, [])
      .map((veg, index) => ({
        key: `item-${index}`,
        label: veg
      })),
    selectedVeg: "",
    gardenArea: this.props.screenProps.height * this.props.screenProps.width
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
            {` `}
            {this.state.seedLookUp[item.label]}
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
          <Text>
            {this.state.selectedVeg}
            {this.state.seedLookUp[this.state.selectedVeg]}
            {"\n"}
            {`Row area: ${Math.floor(
              this.state.gardenArea / this.state.data.length / 100
            ) || 0}cm2`}
          </Text>
        </View>
      </View>
    );
  }
}

export default MyGarden;
