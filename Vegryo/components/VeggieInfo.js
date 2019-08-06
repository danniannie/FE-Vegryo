import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import DateTimePicker from "react-native-modal-datetime-picker";
import { daysGrown } from "../utils/utils";
import * as api from "../utils/api";

export default class VeggieInfo extends Component {
  state = {
    user: "Old McDonald",
    plantDates: {},
    growTime: {
      Carrot: 70,
      Potato: 70,
      Asparagus: 60,
      Broccoli: 125,
      Cabbage: 70,
      Sprouts: 90,
      SweetCorn: 80
    },
    isDateTimePickerVisible: false
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({
      plantDates: {
        ...this.state.plantDates,
        [this.props.selectedVeg]: new Date(date).getTime() / 1000
      }
    });
    api.patchToUser({
      text: { Garden: this.state.plantDates }
    });
    //.then(data => console.log(data));
    this.hideDateTimePicker();
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
          height: 120,
          margin: 5,
          padding: 2,
          borderWidth: 1,
          borderColor: "black", alignItems: "center"
        }}
      >
        <Text style={{ textAlign: "center", padding: 1 }}>
          {/* {conditionally render if ready to harvest} */}

          {selectedVeg
            ? `You're able to plant ${seedLookUp[selectedVeg]} crops` : null}
          {"\n"}
          {selectedVeg
            ? `Row Height: ${Math.floor(gardenHeight / ammountOfVeg)}cm`
            : null}
          {"\n"}
          {selectedVeg ? `Row Width: ${Math.floor(gardenWidth)}cm` : null}
          {"\n"}
          {selectedVeg
            ? `Days until harvest: ${growTime[selectedVeg] -
            Math.floor(daysGrown(plantDates[selectedVeg])) || 0} `
            : null}
        </Text>

        {selectedVeg ? (
          <ProgressBar
            progress={
              daysGrown(plantDates[selectedVeg]) / growTime[selectedVeg] || 0
            }
            width={200}
            color={"#FFA03A"}
          />
        ) : null}
        {selectedVeg ? (
          <View>
            <Button
              title="Date Planted"
              onPress={this.showDateTimePicker}
              style={{ borderWidth: 2, borderColor: "black" }}
            />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
              color="#FFA03A"

            />
          </View>
        ) : null}
      </View>
    );



  }


  componentDidMount() {
    api
      .getUserbyID()
      .then(res => this.setState({ plantDates: res.data.Garden }));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState !== this.state.plantDates) {
      console.log(this.state.plantDates);
    }
  }


}
