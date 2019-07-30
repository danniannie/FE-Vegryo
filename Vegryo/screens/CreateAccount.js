import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from "react-native";

export default class CreateAccount extends React.Component {
  state = {
    Name: '', Username: '', Email: '', GardenLength: 0, GardenWidth: 0, City: ''
  }
  render() {
    return <ScrollView >
      <Text>Create Account Page</Text>
      <View style={styles.container}>

        <Text>Name:</Text>
        <TextInput placeholder="Enter your name..." value={this.state.name} style={
          {
            height: 50
          }

        } />
        <Text>Username:</Text>
        <TextInput placeholder="Username" value={this.state.Username} style={
          {
            height: 50
          }

        } />
        <Text>Email:</Text>
        <TextInput placeholder="Email" value={this.state.Email} style={
          {
            height: 50
          }

        } />
        <Text> Garden Length:</Text>
        <TextInput placeholder="In cm please" value={this.state.GardenLength} style={
          {
            height: 50
          }

        } />
        <Text> Garden Width:</Text>
        <TextInput placeholder="Name" value={this.state.GardenWidth} style={
          {
            height: 50
          }

        } />
        <Text> City:</Text>
        <TextInput placeholder="City" value={this.state.City} style={
          {
            height: 50
          }

        } />
        <Button title='Submit'></Button>
      </View>
    </ScrollView>;
  }


}
const styles = StyleSheet.create({
  container: {
    alignItems: "center", margin: 100
  }



})