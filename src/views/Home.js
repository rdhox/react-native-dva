import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Pop");
          }}
        >
          <Text>{"Show Pop"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;
  return { app };
};

export default connect(mapStateToProps)(Home);
