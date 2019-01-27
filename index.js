import React from "react";
import { AppRegistry, NativeModules } from "react-native";
import { applyMiddleware } from "redux";
import { name as appName } from "./app.json";
import dva from "./src/utils/dva";
import App from "./src/App";
import { routerMiddleware, routerReducer } from "./src/config/NavigationConfig";
import { createLogger } from "redux-logger";
import StoreConfig from "./src/config/StoreConfig";

const appEnhancer = [];

if (__DEV__) {
  const logger = createLogger({
    predicate: (getState, action) => {
      if (
        action.type.indexOf("@@") == 0 ||
        action.type.indexOf("@@start") > 0 ||
        action.type.indexOf("@@end") > 0
      ) {
        return false;
      }
      return true;
    },
    collapsed: true,
    duration: true
  });
  appEnhancer.push(logger);
}

const app = dva({
  initialState: {},
  models: StoreConfig,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  extraEnhancers: [applyMiddleware(...appEnhancer)],
  onError(e) {
    console.log("onError", e);
  }
});

const AppRoot = app.start(<App />);

if (__DEV__) {
  if (NativeModules.DevSettings)
    NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

AppRegistry.registerComponent(appName, () => AppRoot);

console.ignoredYellowBox = [
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Warning: isMounted(...) is deprecated"
];
