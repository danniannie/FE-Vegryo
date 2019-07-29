import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import MyGarden from "./screens/MyGarden";
import Vegetables from "./screens/Vegetables";
import CreateAccount from "./screens/CreateAccount";

const appStack = createStackNavigator({
  Home,
  MyGarden,
  Vegetables,
  CreateAccount
});

export default createAppContainer(appStack);
