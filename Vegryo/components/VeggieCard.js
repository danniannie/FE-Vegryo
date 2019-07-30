import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

export default function VeggieCard(props) {
  const { vegetable } = props
  return (
    <Collapse >
      <CollapseHeader style={styles.header}><Text>{vegetable.id}</Text></CollapseHeader>
      <CollapseBody><Text>
        Optimal Soil: {vegetable.data.OptimalSoil}{"\n"}
        Watering: {vegetable.data.Watering}{"\n"}
        Optimal Sun: {vegetable.data.OptimalSun}{"\n"}
        When to Plant: {vegetable.data.WhenToPlant}{"\n"}
        Care: {vegetable.data.Care}{"\n"}
        Spacing: {vegetable.data.Spacing}{"\n"}
        Planting Considerations: {vegetable.data.PlantingConsiderations}{"\n"}
        Description: {vegetable.data.Description}{"\n"}{"\n"}
      </Text>
      </CollapseBody>
    </Collapse >


  )

}

const styles = StyleSheet.create({
  header: {
    borderColor: 'black',
    borderWidth: 0.5, padding: 20, margin: 2
  }
})


