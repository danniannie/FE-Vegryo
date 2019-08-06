import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import VeggieInfo from "../components/VeggieInfo";
import { createData, createSeedLookup } from "../utils/utils"
import * as api from "../utils/api"



class MyGarden extends Component {
  state = {
    seedLookUp: createSeedLookup(this.props.screenProps.vegetableLayout),
    data: createData(this.props.screenProps.vegetableLayout)
    ,
    selectedVeg: "",
    gardenWidth: this.props.screenProps.width,
    gardenHeight: this.props.screenProps.height,
    vegetables: {}
  };


  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View style={{ height: 400 / this.state.data.length }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isActive ? "rgba(104,120,43,0.6)" : null,
            margin: isActive ? 5 : null,
            borderRadius: 2,
            borderWidth: isActive ? null : 2,
            borderColor: isActive ? null : "#5576B5"
          }}
          onPress={() => {
            this.setState({ selectedVeg: item.label });
          }}
          onLongPress={move}
          onPressOut={moveEnd}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              height: "100%",
              textAlign: 'center',

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
      "http://m.espacepourlavie.ca/sites/espacepourlavie.ca/files/styles/nocrop-gr8/public/istock_000015226257_620px_0.jpg?itok=SCNt6MGy";
    return (
      <View>
        <View style={{ height: 400, margin: 10 }}>
          <View
            style={{
              borderRadius: 2,
              width: "100%",
              height: 400,
              position: "absolute",
              zIndex: 0,
              backgroundColor: "#654321"
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

  componentDidMount() {
    api
      .getAllVeggies()
      .then(vegetables => this.setState({ vegetables })
      );
  }

}

export default MyGarden;
