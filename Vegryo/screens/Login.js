import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from "react-native-elements";
import Input from "../components/Input";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBNxhIc1-pkMTJqaoYKjDGsuZY1buVj2xI",
  authDomain: "vegryo-7ee13.firebaseapp.com",
  projectId: "vegryo-7ee13"
};

firebase.initializeApp(firebaseConfig);

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
    error: ""
  };
  loadingPage() {
    if (this.state.isLoading) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ScrollView>
          <Text style={styles.header}>Have an account?{"\n"}</Text>
          <View style={{ marginRight: 30, marginLeft: 30 }}>
            <Input
              placeholder="Enter your email..."
              label="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Input
              placeholder="Enter your password..."
              label="Password"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              value={this.state.password} //must be longer than 6 letters
            />
            <Button
              title={"Sign Up"}
              onPress={this.onPress}
              style={styles.signup}
              type="solid"
            />

            <Button
              title="Login"
              type="solid"
              style={styles.login}
              onPress={this.handleClick}
            />
          </View>
        </ScrollView>
      );
    }
  }

  render() {
    return <ScrollView>{this.loadingPage()}</ScrollView>;
  }
  signUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onPress = () => {
    const { navigation } = this.props;
    this.setState({
      isLoading: true,
      email: "",
      password: ""
    });
    // if (user in databse) {
    //   this.setState({ error: "The email already exists" });
    // } else {
    this.signUp(this.state.email, this.state.password);
    alert("Successfully signed up!");
    // }
    navigation.navigate("CreateAccount");
  };

  handleClick = () => {
    const { navigation } = this.props;
    navigation.navigate("LoginPage"); //complete
  };
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: "center",
    margin: 15
  },

  signup: {
    marginBottom: 20
  },
  login: {}
});
export default Login;
