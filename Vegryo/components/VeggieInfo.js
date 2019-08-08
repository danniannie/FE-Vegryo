import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import DateTimePicker from "react-native-modal-datetime-picker";
import { daysGrown } from "../utils/utils";

import * as api from "../utils/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class VeggieInfo extends Component {
  state = {
    plantDates: {},
    growTime: {
      Carrot: 70,
      Potato: 70,
      Asparagus: 60,
      Broccoli: 150,
      Sprouts: 180,
      Cabbage: 90
    },
    isDateTimePickerVisible: false
  };

  render() {
    const {
      selectedVeg,
      seedLookUp,
      gardenHeight,
      ammountOfVeg,
      gardenWidth
    } = this.props;
    const { plantDates, growTime } = this.state;
    return (
      <View
        style={{
          width: "90%",
          height: 125,
          margin: 3,
          padding: 2,
          borderWidth: 1,
          borderColor: "black",
          alignItems: "center"
        }}
      >
        {growTime[selectedVeg] - daysGrown(plantDates[selectedVeg]) <= 0 ? (
          <View>
            <Text
              style={{
                textAlign: "center",
                padding: 1,
                fontFamily: "B612Mono-Regular"
              }}
            >
              {"\n"}
              {"\n"}Your crops are ready to harvest!
            </Text>
          </View>
        ) : (
          <View>
            <Text
              style={{
                textAlign: "center",
                padding: 1,
                fontFamily: "B612Mono-Regular"
              }}
            >
              {selectedVeg.length > 0
                ? `You're able to plant ${seedLookUp[selectedVeg]} crops`
                : null}
              {"\n"}
              {selectedVeg.length > 0
                ? `Row Height: ${Math.floor(gardenHeight / ammountOfVeg)}cm`
                : null}
              {"\n"}
              {selectedVeg.length > 0
                ? `Row Width: ${Math.floor(gardenWidth)}cm`
                : null}
            </Text>
            <Text
              style={{
                textAlign: "center",
                padding: 1,
                fontFamily: "B612Mono-Regular"
              }}
            >
              {selectedVeg.length > 0
                ? `Days until harvest: ${growTime[selectedVeg] -
                    Math.floor(daysGrown(plantDates[selectedVeg])) || 0} `
                : null}
            </Text>
            {selectedVeg.length > 0 ? (
              <ProgressBar
                style={{
                  textAlign: "center"
                }}
                progress={
                  daysGrown(plantDates[selectedVeg]) / growTime[selectedVeg] ||
                  0
                }
                width={200}
                color={"#FFA03A"}
              />
            ) : null}

            {selectedVeg.length > 0 ? (
              <View
                style={{
                  textAlign: "center",
                  padding: 1,
                  fontFamily: "B612Mono-Regular",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity
                  onPress={this.showDateTimePicker}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Date Planted</Text>
                </TouchableOpacity>

                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  color="#FFA03A"
                />
              </View>
            ) : null}
          </View>
        )}
      </View>
    );
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    const { plantDates } = this.state;
    const { addPlantDate } = this.props;
    plantDates[this.props.selectedVeg] = new Date(date).getTime() / 1000;

    this.setState({ plantDates });
    addPlantDate(plantDates);
    api.patchToUser(this.props.user, {
      text: { Garden: this.state.plantDates }
    });

    this.hideDateTimePicker();
  };
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "black",
    width: 120,
    height: 30,
    margin: 5,
    backgroundColor: "#5576B5"
  },
  buttonText: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontFamily: "B612Mono-Regular"
  }
});
