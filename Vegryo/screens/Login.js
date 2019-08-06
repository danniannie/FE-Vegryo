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

            <Button
              title="Sign Out"
              type="solid"
              onPress={this.handleSignOut}
            />
          </View>
        </ScrollView>
      );
    }
  }

  render() {
    return <ScrollView>{this.loadingPage()}</ScrollView>;
  }

  Login = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    }
  };
  handleClick = () => {
    const { navigation } = this.props;
    this.Login(this.state.email, this.state.password);
    navigation.navigate("MyGarden"); //give error if invalid password/email // link users backend to frontend -security
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log("auth");
    });
  }

  signUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    }
  };
  onPress = () => {
    const { navigation } = this.props;
    this.setState({
      isLoading: false,
      email: "",
      password: ""
    });
    this.signUp(this.state.email, this.state.password);
    alert("Successfully signed up!");
    //navigates then errors, erro to show if user already exists
    navigation.navigate("CreateAccount");
  };

  signOut = (email, password) => {
    try {
      firebase.auth().signOut(email, password);
    } catch (error) {
      console.log("error");
    }
  };
  handleSignOut = () => {
    const { navigation } = this.props;
    this.signOut(this.state.email, this.state.password);
    alert("signed out");
    navigation.navigate("");
  };
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    lineHeight: 30,
    textAlign: "center",
    marginTop: 20
  },

  signup: {
    marginBottom: 20
  },
  login: {}
});
export default Login;
