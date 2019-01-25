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
// Screens
import Home from "../views/Home";
import Page1 from "../views/Page1";
import Page2 from "../views/Page2";
import Page3 from "../views/Page3";

const HomeNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
    Page3: { screen: Page3 }
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
