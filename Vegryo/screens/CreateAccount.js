import React, { Component } from "react";
import t from "tcomb-form-native";
import * as api from "../utils/api";
import { _ } from "lodash";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
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

// const options = {};

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
      id: Username,
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
      api.postNewUser(body).then(user => console.log(user));
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Create Account:</Text>
          <View style={styles.form}>
            <Form
              ref="form"
              type={Person}
              options={options}
              style={{ backgroundColor: "black" }}
            />
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            underlayColor="brown"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
const { stylesheet } = _.cloneDeep(Form);
const options = { stylesheet: stylesheet };
stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.normal.borderColor = "lightgrey";
stylesheet.textboxView.normal.marginBottom = 5;
stylesheet.controlLabel.normal.color = "brown";
stylesheet.textbox.normal.color = "pink";

stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.error.marginBottom = 5;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10
  },
  header: {
    padding: 20,
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "rgba(104,120,43,0.6)"
  },
  form: {
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 40,
    backgroundColor: "rgba(104,120,43,0.6)",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,

    alignSelf: "stretch",
    justifyContent: "center",
    width: "100%"
  }
});

export default CreateAccount;
