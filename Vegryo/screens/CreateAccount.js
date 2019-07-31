import React, { Component } from "react";
import t from "tcomb-form-native";
import * as api from "../utils/api";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

const Form = t.form.Form;

const Person = t.struct({
  Name: t.String,
  Username: t.String,
  Email: t.String,
  GardenLength: t.Number,
  GardenWidth: t.Number,
  City: t.String
});

const options = {};

class CreateAccount extends Component {
  onPress = () => {
    const {
      Username,
      Name,
      Email,
      GardenLength,
      GardenWidth,
      City
    } = this.refs.form.getValue();

    const body = {
      id: username,
      text: {
        Name,
        Username,
        Email,
        GardenLength,
        GardenWidth,
        City
      }
    };

    if (body) {
      console.log(body);
      api.postNewUser(body).then(user => console.log(user));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={Person} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

export default CreateAccount;
