import { StyleSheet, View, Text } from "react-native";
import React from "react";
import StopWatch from "./components/StopWatch";

const App = () => {
  return (
    <View style={styles.container}>
      <StopWatch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;