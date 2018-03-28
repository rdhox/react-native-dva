import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { BackHandler, Animated, Easing } from "react-native";
import Intro from "./views/Intro";

const MainNavigator = StackNavigator(
  { Intro: { screen: Intro } },
  { headerMode: "none" }
);

const RootNavigator = StackNavigator(
  { Main: { screen: MainNavigator } },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
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

export function routerReducer(state, action = {}) {
  return RootNavigator.router.getStateForAction(action, state);
}

export default RootNavigator;
