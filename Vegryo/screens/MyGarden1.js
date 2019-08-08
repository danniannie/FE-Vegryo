import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import VeggieInfo from "../components/VeggieInfo";
import { createData, createSeedLookup, addressLookup } from "../utils/utils";
import * as api from "../utils/api";
import { Overlay } from "react-native-elements";
import Carrot from "../assets/Carrot.png";

class MyGarden extends Component {
  state = {
    seedLookUp: {},
    data: [],
    selectedVeg: [],
    gardenWidth: 0,
    gardenHeight: 0,
    isVisible: true
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
              textAlign: "center",
              fontFamily: "B612Mono-Regular"
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { user, vegetableLayout } = this.props.screenProps;

    return (
      <View>
        <View>
          {vegetableLayout.length >= 1 ? (
            <Overlay
              isVisible={this.state.isVisible}
              onBackdropPress={() => {
                this.setState({ isVisible: false });
              }}
              style={{ overlayBackgroundColor: "grey" }}
            >
              <View>
                <View style={{ alignItems: "center", margin: 10 }}>
                  <Image
                    source={Carrot}
                    style={{ height: 150, width: 150 }}
                    resizeMode="center"
                  />
                </View>

                <View>
                  <Text style={styles.overlayText}>
                    Drag and drop to rearrange your garden, or click on each
                    vegetable to see more information.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ isVisible: false });
                    }}
                  >
                    <Text style={styles.overlayButton}>Got it!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Overlay>
          ) : (
            <Overlay
              isVisible={this.state.isVisible}
              onBackdropPress={() => {
                this.setState({ isVisible: false });
              }}
              style={{ overlayBackgroundColor: "grey" }}
            >
              <View>
                <View style={{ alignItems: "center", margin: 10 }}>
                  <Image
                    source={Carrot}
                    style={{ height: 150, width: 150 }}
                    resizeMode="center"
                  />
                </View>

                <View>
                  <Text style={styles.overlayText}>
                    Please select your vegetables to allow us to build your
                    garden.
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Vegetables");
                    }}
                  >
                    <Text style={styles.overlayButton}>Got it!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Overlay>
          )}
        </View>
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
        <View style={{ alignItems: "center" }}>
          <VeggieInfo
            selectedVeg={this.state.selectedVeg}
            seedLookUp={this.state.seedLookUp}
            ammountOfVeg={this.state.data.length}
            gardenWidth={this.state.gardenWidth}
            gardenHeight={this.state.gardenHeight}
            user={this.props.screenProps.user}
            addPlantDate={this.props.screenProps.addPlantDate}
            user={user}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    const seedLookUp = createSeedLookup(this.props.screenProps.vegetableLayout);
    const data = createData(this.props.screenProps.vegetableLayout);
    const gardenWidth = this.props.screenProps.width;
    const gardenHeight = this.props.screenProps.height;
    this.setState({
      seedLookUp,
      data,
      gardenHeight,
      gardenWidth
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.screenProps.vegetableLayout !=
      this.props.screenProps.vegetableLayout
    ) {
      const seedLookUp = createSeedLookup(
        this.props.screenProps.vegetableLayout
      );
      const data = createData(this.props.screenProps.vegetableLayout);

      this.setState({
        seedLookUp,
        data
      });
    }
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
  },
  overlayButton: {
    fontSize: 30,
    fontFamily: "B612Mono-Regular",
    color: "#ffa03a",
    padding: 5,
    textAlign: "center"
  },
  overlayText: {
    fontSize: 25,
    fontFamily: "B612Mono-Regular",
    textAlign: "center"
  }
});

export default MyGarden;
