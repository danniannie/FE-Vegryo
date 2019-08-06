import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
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

    const Picture =
      vegetable.data.Picture;
    return (
      <Collapse>
        <CollapseHeader style={styles.header}>
          <Text style={{ fontFamily: 'B612Mono-Regular' }}>{vegetable.id} </Text>
        </CollapseHeader>
        <CollapseBody style={styles.body}>
          <View style={{ flexDirection: 'row', flex: 1, "justify-content": 'space-around' }}>
            <Image
              style={{ width: 150, height: 140 }}
              source={{
                uri: Picture
              }} resizeMode="center"
            />
            <View>
              <TouchableOpacity style={styles.button}
                onPress={() => {
                  this.select("add");
                }}
                disabled={this.state.disabled}><Text>Add</Text></TouchableOpacity>


              <TouchableOpacity style={styles.button}
                onPress={() => {
                  this.select("remove");
                }}
                disabled={this.state.disabledRemove}><Text>Remove</Text></TouchableOpacity>
            </View>
          </View>

          <Text style={{ fontFamily: 'B612Mono-Regular' }}>
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
    borderColor: "black",
    borderWidth: 0.5,
    padding: 20,
    margin: 2,
    alignItems: "center"
  },
  body: {
    margin: 10,
    alignItems: "center"
  },
  button: {
    borderColor: "black",
    borderWidth: 0.5
  }
});
