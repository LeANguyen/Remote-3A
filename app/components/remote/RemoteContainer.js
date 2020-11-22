import React from "react";
import { View, StyleSheet } from "react-native";
import RemoteButton from "./RemoteButton";
import colors from "../../config/colors";

function RemoteContainer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.controlPanel2}>
        <RemoteButton
          _iconName={"arrow-up-bold"}
          _style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        ></RemoteButton>
        <View style={{ flexDirection: "row" }}>
          <RemoteButton
            _iconName={"arrow-left-bold"}
            _style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
          ></RemoteButton>
          <RemoteButton _text="AUTO"></RemoteButton>
          <RemoteButton
            _iconName={"arrow-right-bold"}
            _style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
          ></RemoteButton>
        </View>
        <RemoteButton
          _iconName={"arrow-down-bold"}
          _style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
        ></RemoteButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light2,
    // borderRadius: 170,
    padding: 10,
    flexDirection: "row"
  },
  controlPanel1: {},
  controlPanel2: {
    // flexDirection: "row"
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RemoteContainer;
