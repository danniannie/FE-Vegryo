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

class CreateAccount extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Form ref="form" type={Person} options={options} />
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

  onPress = () => {
    const { addUser } = this.props.screenProps;

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
      api
        .postNewUser(body)
        .then(user =>
          this.props.screenProps.addDimensions(GardenLength, GardenWidth)
        );
    }
    addUser(Username);
    this.props.navigation.navigate("Vegetables");
  };
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
stylesheet.controlLabel.normal.color = "#ffa03a";
stylesheet.textbox.normal.color = "brown";
stylesheet.controlLabel.normal.fontFamily = "B612Mono-Regular";

stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.error.marginBottom = 5;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10
  },

  form: {
    margin: 10,
    fontFamily: "B612Mono-Regular"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    fontFamily: "B612Mono-Regular"
  },
  button: {
    height: 40,
    backgroundColor: "#5576B5",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: "stretch",
    justifyContent: "center",
    width: "100%"
  }
});

export default CreateAccount;
