import React from "react";
import { SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";

const Page2 = props => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text>Page2</Text>
  </SafeAreaView>
);

export default connect(({ app }) => ({ app }))(Page2);
