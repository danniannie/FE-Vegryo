import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as api from "../utils/api";
import sunPic from "../assets/sun.jpg";
class Weather extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    sunPic: require("../assets/sun.jpg"),
    cloudPic: require("../assets/cloudy.jpg"),
    rainPic: require("../assets/rain.jpg"),
    thunderPic: require("../assets/thunder.jpg")
  };
  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      sunPic
    } = this.state;
    return (
      <View style={styles.weather}>
        <Text style={styles.text}>
          {city}, {country}
          {"\n"}
          {"\n"}
          {description.slice(0, 1).toUpperCase() + description.slice(1)} {"\n"}
          {"\n"}
          {temperature}
          {"\n"}
          {"\n"}
          Humidity: {humidity}%
        </Text>
        <Image
          style={{ width: 200, height: 200, position: "absolute", right: 0 }}
          source={sunPic}
        />
      </View>
    );
  }

  componentDidMount = () => {
    this.fetchWeather();
  };

  fetchWeather = async () => {
    const data = await api.getWeather();
    this.setState({
      weather: data,
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    });
  };
}

styles = StyleSheet.create({
  weather: {
    height: 200,
    backgroundColor: "whitesmoke"
  },
  text: {
    fontSize: 16,
    margin: 15
  }
});

export default Weather;
