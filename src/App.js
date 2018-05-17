import React, { PureComponent } from "react";
import { Platform, BackHandler, StyleSheet, View, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import Router from "./Router";

class App extends PureComponent {
  state = {};

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backHandle);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backHandle);
  }

  backHandle = () => {
    const currentScreen = this.getCurrentScreen(this.props.router);

    return false;
  };

  getCurrentScreen = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this.getCurrentScreen(route);
    }
    return route.routeName;
  };

  render() {
    const { dispatch, app, router } = this.props,
      addListener = createReduxBoundAddListener("root"),
      navigation = {
        dispatch,
        addListener,
        state: router
      };
    return (
      <View style={styles.container}>
        <Router navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { app, router } = state;
  return { app, router };
};

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: { flex: 1 }
});
