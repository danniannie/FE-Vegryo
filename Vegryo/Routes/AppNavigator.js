import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import MyGarden from "../screens/MyGarden1";
import Vegetables from "../screens/Vegetables";
import CreateAccount from "../screens/CreateAccount";
import WelcomePage from "../screens/WelcomePage";

const AppNavigator = createStackNavigator(
  {
    Home,
    MyGarden,
    Vegetables,
    CreateAccount,
    WelcomePage
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#e5ffbe"
      },
      headerTintColor: "#5576B5"
    }
  }
);

export default createAppContainer(AppNavigator);
