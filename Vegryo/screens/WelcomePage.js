import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Weather from "../components/Weather";
import HomeVeggies from "../components/HomeVeggies";
import * as api from "../utils/api";
import AnimatedCarrot from "../components/LoadingCard";

class WelcomePage extends React.Component {
  state = {
    veg: [],
    dateplanted: {},
    isLoading: true
  };

  render() {
    return (
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            padding: 35,
            fontSize: 20,
            backgroundColor: "green"
          }}
        >
          Welcome fellow Gardener!
        </Text>
        {this.state.isLoading ? (
          <AnimatedCarrot />
        ) : (
          <View>
            <Weather />
            {this.state.veg.map(veggies => (
              <HomeVeggies
                key={veggies}
                veg={veggies}
                date={this.state.dateplanted[veggies]}
              />
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
  componentDidMount = () => {
    this.fetchUser().then(data => this.setState({ isLoading: false }));
  };
  fetchUser = async () => {
    const data = await api.getUserbyID();
    this.setState({
      veg: Object.keys(data.data.Garden),
      dateplanted: data.data.Garden
    });
  };
}

export default WelcomePage;
