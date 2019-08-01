import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";
import MyGarden from "./screens/MyGarden1";
import Vegetables from "./screens/Vegetables";
import CreateAccount from "./screens/CreateAccount";
import WelcomePage from "./screens/WelcomePage";

const appStack = createStackNavigator(
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
const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: appStack },
    MyGarden: { screen: appStack },
    Vegetables: { screen: appStack },
    CreateAccount: { screen: appStack },
    WelcomePage: { screen: appStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: { focused, tintColor }
    }) => {
      const { routeName } = navigation.state;
      // let IconComponent = Ionicons;
      // let iconName = "";
      // if (routeName === "WelcomePage") {
      //   //if (routeName === 'MyGarden')
      //   //if (routeName === 'Vegetables)
      //   //if (routeName === 'CreateAccount')
      //   return <Icon name="ios-person" size={50} color="#484538" />;
      // }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#ffa03a",
      inactiveTintColor: "#484538"
    }
  }
);
//     }
//   }
// );

export default createAppContainer(BottomNav);
