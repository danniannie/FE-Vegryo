import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import MyGarden from "./screens/MyGarden";
import Vegetables from "./screens/Vegetables";
import CreateAccount from "./screens/CreateAccount";
import WelcomePage from "./screens/WelcomePage";

const appStack = createStackNavigator({
  Home,
  MyGarden,
  Vegetables,
  CreateAccount,
  WelcomePage
});

export default createAppContainer(appStack);
