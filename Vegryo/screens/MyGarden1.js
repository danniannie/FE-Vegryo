import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import VeggieInfo from "../components/VeggieInfo";
import { createData, createSeedLookup } from "../utils/utils"



class MyGarden extends Component {
  state = {
    seedLookUp: createSeedLookup(this.props.screenProps.vegetableLayout),
    data: createData(this.props.screenProps.vegetableLayout)
    ,
    selectedVeg: "",
    gardenWidth: this.props.screenProps.width,
    gardenHeight: this.props.screenProps.height
  };

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View style={{ height: 400 / this.state.data.length }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isActive ? "rgba(104,120,43,0.6)" : null,
            margin: isActive ? 5 : 1,
            borderRadius: 2,
            borderWidth: isActive ? null : 1,
            borderColor: isActive ? null : "#CD853F"
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
              fontSize: 30,
              height: "100%",
              textAlign: 'center'
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
        <VeggieInfo
          selectedVeg={this.state.selectedVeg}
          seedLookUp={this.state.seedLookUp}
          ammountOfVeg={this.state.data.length}
          gardenWidth={this.state.gardenWidth}
          gardenHeight={this.state.gardenHeight}
        />
      </View>
    );
  }



}

export default MyGarden;
