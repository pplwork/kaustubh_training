import React from "react";
import { StyleSheet, View, Button } from "react-native";

const ButtonComponent = (props) => {
  return (
    <View>
      {props.status === 0 ? (
        <View style={styles.btncomponent}>
          <Button
            title="Start"
            onPress={props.start}
          />
        </View>
      ) : (
        <View></View>
      )}

      {props.status === 1 ? (
        <View style={styles.btncomponent}>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Stop"
              onPress={props.stop}
            />
          </View>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Lap"
              onPress={props.lap}
            />
          </View>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Reset"
              onPress={props.reset}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}

      {props.status === 2 ? (
        <View style={styles.btncomponent}>
          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Resume"
              onPress={props.resume}
            />
          </View>

          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Lap"
              onPress={props.lap}
            />
          </View>

          <View style={styles.btnmargin}>
            <Button
              style={styles.btnmargin}
              title="Reset"
              onPress={props.reset}
            />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btncomponent: {
    flexDirection: "row",
  },
  btnmargin: {
    marginRight: "10px",
  },
});

export default ButtonComponent;