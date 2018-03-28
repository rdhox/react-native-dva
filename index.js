import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { create } from "dva-core";
import { Provider, connect } from "react-redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import appModel from "./src/models/app";
import routerModel from "./src/models/router";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const dva = create({
  initialState: {},
  onError(e) {
    console.log("onError", e);
  }
});

dva.model(appModel);
dva.model(routerModel);

dva.use({ onAction: middleware });

dva.start();

const RootApp = () => (
  <Provider store={dva._store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("dvaStarter", () => RootApp);
