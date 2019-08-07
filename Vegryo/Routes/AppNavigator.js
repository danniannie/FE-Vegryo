import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import MyGarden from "../screens/MyGarden1";
import Vegetables from "../screens/Vegetables";
import CreateAccount from "../screens/CreateAccount";
import WelcomePage from "../screens/WelcomePage";
import SignUp from "../screens/SignUp";

const AppNavigator = createStackNavigator(
  {
    Login,
    WelcomePage,
    Vegetables,
    MyGarden,
    CreateAccount,
    SignUp
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
