import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

export default class VeggieCard extends React.Component {
  render() {
    const { vegetable, count = 0 } = this.props;
    const Picture =
      vegetable.data.Picture ||
      "https://www.simplyrecipes.com/wp-content/uploads/2015/04/roasted-asparagus-horiz-a-1600.jpg";
    return (
      <Collapse>
        <CollapseHeader style={styles.header}>
          <Text>{vegetable.id} </Text>
        </CollapseHeader>
        <CollapseBody style={styles.body}>
          <Button
            title="Add"
            style={styles.button}
            onPress={() => {
              this.select();
            }}
          />
          <Button
            title="Remove"
            style={styles.button}
          // onPress={() => {
          //   if (count === 0) {
          //     disabled = true;
          //   } else {
          //     this.select(-1);
          //   }
          // }}
          />
          <Image
            style={{ width: 130, height: 140 }}
            source={{
              uri: Picture
            }}
          />
          <Text>
            {vegetable.id}
            {/* count: {count} */}
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

  select = () => {
    const { vegetable } = this.props
    const { handleClick } = this.props;
    console.log(vegetable.id, vegetable.data.Spacing)
    handleClick(vegetable.id, vegetable.data.Spacing);
  };
}

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
