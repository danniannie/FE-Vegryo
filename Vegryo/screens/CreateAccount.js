import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, TextInput } from "react-native";

export default class CreateAccount extends React.Component {
  state = {
    Name: '', Username: '', Email: '', GardenLength: '', GardenWidth: '', City: ''
  }
  render() {

    return <ScrollView >
      <Text>Create Account Page</Text>
      <View style={styles.container}>

        <Text>Name:</Text>
        <TextInput placeholder="Enter your name..." value={this.state.Name} onChangeText={(Name) => { this.setState({ Name }) }} style={
          {
            height: 50
          }

        } />
        <Text>Username:</Text>
        <TextInput placeholder="Username" value={this.state.Username} onChangeText={(Username) => { this.setState({ Username }) }} style={
          {
            height: 50
          }

        } />
        <Text>Email:</Text>
        <TextInput placeholder="Email" value={this.state.Email} onChangeText={(Email) => { this.setState({ Email }) }} style={
          {
            height: 50
          }

        } />
        <Text> Garden Length:</Text>
        <TextInput placeholder="In cm please" value={this.state.GardenLength} onChangeText={(GardenLength) => { this.setState({ GardenLength }) }} style={
          {
            height: 50
          }

        } />
        <Text> Garden Width:</Text>
        <TextInput placeholder="Name" value={this.state.GardenWidth} onChangeText={(GardenWidth) => { this.setState({ GardenWidth }) }} style={
          {
            height: 50
          }

        } />
        <Text> City:</Text>
        <TextInput placeholder="City" value={this.state.City} onChangeText={(City) => { this.setState({ City }) }} style={
          {
            height: 50
          }

        } />
        <Button title='Submit' onPress={this.handleSubmit}></Button>
      </View>
    </ScrollView>;
  }

  handleSubmit = (event) => {
    const { Name, Username, Email, GardenLength, GardenWidth, City } = this.state
    const body = {
      id: Username, text: {
        Name, Username, Email, GardenLength, GardenWidth, City
      }
    }

  }


}
const styles = StyleSheet.create({
  container: {
    alignItems: "center", margin: 100
  }



})