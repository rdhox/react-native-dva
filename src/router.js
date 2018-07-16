import React from "react";
import { BackHandler, Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions
} from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import Home from "./views/Home";
import Pop from "./views/Pop";

const HomeNavigator = createBottomTabNavigator({
  Home: { screen: Home }
});

// const MainNavigator = createStackNavigator(
//   {
//     HomeNavigator: { screen: HomeNavigator }
//   },
//   {
//     headerMode: "float"
//   }
// );

const AppNavigator = createStackNavigator(
  {
    Main: { screen: HomeNavigator },
    Pop: { screen: Pop }
  },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);

export const routerReducer = createNavigationReducer(AppNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.router
);

const Router = reduxifyNavigator(AppNavigator, "root");

export default Router;
