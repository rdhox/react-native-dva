import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
// Style
import { IconMenu } from "components/menu/Icon";
// Screens
import Home from "views/Home";
import Page1 from "views/Page1";
import Page2 from "views/Page2";
import Page3 from "views/Page3";

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: <IconMenu source={require("../assets/menu/home.png")} />
      }
    },
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: "Page1",
        tabBarIcon: <IconMenu source={require("../assets/menu/page1.png")} />
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: "Page2",
        tabBarIcon: <IconMenu source={require("../assets/menu/page2.png")} />
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: "Page3",
        tabBarIcon: <IconMenu source={require("../assets/menu/page3.png")} />
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: { screen: HomeNavigator }
  },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.router
);

const Router = reduxifyNavigator(AppNavigator, "root");

export default Router;
