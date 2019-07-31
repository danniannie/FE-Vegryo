import React, { Component } from "react";
import { Image, Animated, Easing } from "react-native";

export default class AnimatedCarrot extends Component {
  constructor() {
    super();
    this.RotateValueHolder = new Animated.Value(0);
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(() => this.StartImageRotateFunction());
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <Animated.Image
        style={{
          width: 200,
          height: 200,
          margin: 50,
          alignItems: "center",
          transform: [{ rotate: RotateData }]
        }}
        source={{
          uri:
            "https://firebasestorage.googleapis.com/v0/b/vegryo-7ee13.appspot.com/o/Carro%20logo.png?alt=media&token=4b28e227-ae40-4b83-8dc8-58bdb28ae7d8"
        }}
      />
    );
  }
}
