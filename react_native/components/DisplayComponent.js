import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DisplayComponent = (props) => {
  const h = () => {
    if (props.time.h === 0) {
      return <Text></Text>;
    } else {
      return (
        <Text>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</Text>
      );
    }
  };
  return (
    <View style={styles.mainvalue}>
      {h()}
      <Text>{props.time.m >= 10 ? props.time.m : "0" + props.time.m} : </Text>
      <Text>{props.time.s >= 10 ? props.time.s : "0" + props.time.s} : </Text>
      <Text>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainvalue: {
    flexDirection: "row",
    margin:"1rem",
    padding:"1rem"
  },
});

export default DisplayComponent;