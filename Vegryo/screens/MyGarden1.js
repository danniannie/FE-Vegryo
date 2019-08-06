import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import VeggieInfo from "../components/VeggieInfo";
import { createData, createSeedLookup } from "../utils/utils"
import * as api from "../utils/api"
import { Overlay } from "react-native-elements"



class MyGarden extends Component {
  state = {
    seedLookUp: createSeedLookup(this.props.screenProps.vegetableLayout),
    data: createData(this.props.screenProps.vegetableLayout)
    ,
    selectedVeg: "",
    gardenWidth: this.props.screenProps.width,
    gardenHeight: this.props.screenProps.height,
    vegetables: {}, isVisible: true
  };


  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <View style={{ height: 400 / this.state.data.length }}>
        <TouchableOpacity
          style={isActive ? styles.selectedActive : styles.selectedNotActive}
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
              fontFamily: 'B612Mono-Regular'
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
        <View>
          <Overlay isVisible={this.state.isVisible} onBackdropPress={() => { this.setState({ isVisible: false }) }} style={{ overlayBackgroundColor: 'grey' }}>
            <View>
              <Text style={{ fontSize: 35, fontFamily: 'B612Mono-Regular' }}>Drag and drop to rearrange your garden, or click on each vegetable to see more information.</Text>
              <TouchableOpacity onPress={() => { this.setState({ isVisible: false }) }}><Text style={{ fontSize: 30, fontFamily: 'B612Mono-Regular', color: "#ffa03a", paddingTop: 5 }}>Got it!</Text></TouchableOpacity>
            </View>
          </Overlay></View>
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
        <View style={{ alignItems: 'center' }}>
          <VeggieInfo
            selectedVeg={this.state.selectedVeg}
            seedLookUp={this.state.seedLookUp}
            ammountOfVeg={this.state.data.length}
            gardenWidth={this.state.gardenWidth}
            gardenHeight={this.state.gardenHeight}
          />
        </View>
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

const styles = StyleSheet.create({
  selectedActive: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(104,120,43,0.6)",
    margin: 5,
    borderRadius: 2,
    borderWidth: null,
    borderColor: null
  },
  selectedNotActive: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: null,
    margin: null,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#5576B5"
  }
})

export default MyGarden;
