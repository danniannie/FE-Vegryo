import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

export default class VeggieCard extends React.Component {
  state = {
    disabled: false,
    disabledRemove: true
  };
  render() {
    const { vegetable } = this.props;
    const Picture = vegetable.data.Picture;
    return (
      <Collapse>
        <CollapseHeader style={styles.header}>
          <Text style={{ fontFamily: "B612Mono-Regular", fontSize: 16 }}>
            {vegetable.id}{" "}
          </Text>
        </CollapseHeader>
        <CollapseBody style={styles.body}>
          <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              style={this.state.disabled ? styles.buttonPressed : styles.button}
              onPress={() => {
                this.select("add");
              }}
              disabled={this.state.disabled}
            >
              <Text
                style={
                  this.state.disabled
                    ? styles.buttonPressedText
                    : styles.buttonText
                }
              >
                Add
              </Text>
            </TouchableOpacity>

            <Image
              style={{ width: 150, height: 140, flex: 1 }}
              source={{
                uri: Picture
              }}
              resizeMode="center"
            />

            <TouchableOpacity
              style={
                this.state.disabledRemove ? styles.button : styles.buttonPressed
              }
              onPress={() => {
                this.select("remove");
              }}
              disabled={this.state.disabledRemove}
            >
              <Text
                style={
                  this.state.disabledRemove
                    ? styles.buttonPressedText
                    : styles.buttonText
                }
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>
            {vegetable.id}
            {"\n"}
            {"\n"}
            Optimal Soil: {vegetable.data.OptimalSoil}
            {"\n"}
            {"\n"}
            Watering: {vegetable.data.Watering}
            {"\n"}
            {"\n"}
            Optimal Sun: {vegetable.data.OptimalSun}
            {"\n"}
            {"\n"}
            When to Plant: {vegetable.data.WhenToPlant}
            {"\n"}
            {"\n"}
            Care: {vegetable.data.Care}
            {"\n"}
            {"\n"}
            Spacing: {vegetable.data.Spacing}
            {"\n"}
            {"\n"}
            Planting Considerations: {vegetable.data.PlantingConsiderations}
            {"\n"}
            {"\n"}
            Description: {vegetable.data.Description}
            {"\n"}
          </Text>
        </CollapseBody>
      </Collapse>
    );
  }

  componentDidMount = () => {
    const { veggieHere } = this.props;
    if (veggieHere === true) {
      this.setState({ disabled: true, disabledRemove: false });
    } else {
      this.setState({ disabled: false, disabledRemove: true });
    }
  };

  select = option => {
    const { vegetable, handleAdd, handleRemove } = this.props;
    if (option === "add") {
      handleAdd(vegetable.id, vegetable.data.Spacing);
      this.setState({ disabled: true, disabledRemove: false });
    } else {
      handleRemove(vegetable.id);
      this.setState({ disabled: false, disabledRemove: true });
    }
  };
}

/*  */

const styles = StyleSheet.create({
  header: {
    padding: 30,
    margin: 3,
    alignItems: "center",
    backgroundColor: "whitesmoke"
  },
  body: {
    margin: 10,
    alignItems: "center"
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    height: 35
  },
  buttonPressed: {
    borderColor: "grey",
    color: "red",
    borderWidth: 1,
    width: 100,
    height: 35
  },
  buttonText: {
    fontFamily: "B612Mono-Regular",
    fontSize: 20,
    textAlign: "center",
    padding: 3
  },
  buttonPressedText: {
    fontFamily: "B612Mono-Regular",
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    padding: 3
  },
  text: {
    fontFamily: "B612Mono-Regular"
  }
});
