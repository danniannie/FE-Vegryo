import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as api from "../utils/api";
import KelvinToCelcius from "kelvin-to-celsius";

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
      sunPic,
      cloudPic,
      rainPic,
      thunderPic
    } = this.state;

    return (
      <View style={styles.weather}>
        <Text
          style={{ fontSize: 22, margin: 15, fontFamily: "B612Mono-Regular" }}
        >
          {KelvinToCelcius(Number(temperature)).toFixed(1)}˚C
        </Text>
        <Text style={styles.text}>
          {description.slice(0, 1).toUpperCase() + description.slice(1)}
          {"\n"}
          Humidity: {humidity}%
        </Text>
        <Text
          style={{
            fontSize: 30,
            margin: 15,
            fontFamily: "B612Mono-Regular"
          }}
        >
          {city}, {country}
        </Text>

        <Image
          style={{
            width: 180,
            height: 180,
            position: "absolute",
            right: 0,
            top: 10
          }}
          source={description.includes("rain") ? rainPic : cloudPic}
          resizeMode="contain"
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
    backgroundColor: "whitesmoke",
    fontFamily: "B612Mono-Regular"
  },
  text: {
    fontSize: 16,
    margin: 15,
    fontFamily: "B612Mono-Regular"
  }
});

export default Weather;
