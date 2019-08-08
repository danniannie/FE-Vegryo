import React from "react";
import { Text, View, ScrollView } from "react-native";
import Weather from "../components/Weather";
import HomeVeggies from "../components/HomeVeggies";
import * as api from "../utils/api";
import AnimatedCarrot from "../components/LoadingCard";

class WelcomePage extends React.Component {
  state = {
    veg: [],
    dateplanted: {},
    isLoadingUser: true
  };

  render() {
    const { user } = this.props.screenProps;
    return (
      <ScrollView>
        {this.state.isLoadingUser ? (
          <AnimatedCarrot />
        ) : (
          <View>
            <Weather />
            <Text
              style={{
                fontSize: 22,
                margin: 15,
                paddingTop: 7,
                fontFamily: "B612Mono-Regular",
                textAlign: "center"
              }}
            >
              {new Date().getHours() <= 12
                ? `Good Morning, ${user}!`
                : `Good Afternoon, ${user}!`}
            </Text>
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

  componentDidUpdate = (prevProps, prevState) => {
    const { plantDates } = this.props.screenProps;
    if (plantDates !== prevProps.screenProps.plantDates) {
      console.log(Object.keys(plantDates));
      console.log(Object.values(plantDates));

      this.setState({
        veg: Object.keys(plantDates),
        dateplanted: plantDates
      });
    }
  };

  componentDidMount = () => {
    this.fetchUser().then(data => this.setState({ isLoadingUser: false }));
  };
  fetchUser = async () => {
    const { user } = this.props.screenProps;
    const data = await api.getUserbyID(user);
    this.setState({
      veg: Object.keys(data.data.Garden),
      dateplanted: data.data.Garden
    });
    return data;
  };
}

export default WelcomePage;
