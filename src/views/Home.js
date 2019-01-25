import React from "react";
import { SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";

const Home = props => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Home</Text>
  </SafeAreaView>
);

export default connect(({ app }) => ({ app }))(Home);
