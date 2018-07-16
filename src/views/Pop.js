import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity
} from "react-native";

export default class Pop extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text>{"Back Home"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
