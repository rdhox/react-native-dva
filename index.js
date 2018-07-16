import React from "react";
import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";

import dva from "./src/utils/dva";
import App from "./src/App";
import { routerMiddleware, routerReducer } from "./src/router";
import appModel from "./src/models/app";

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log("onError", e);
  }
});

const AppRoot = app.start(<App />);

AppRegistry.registerComponent(appName, () => AppRoot);

console.ignoredYellowBox = [
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Warning: isMounted(...) is deprecated"
];
