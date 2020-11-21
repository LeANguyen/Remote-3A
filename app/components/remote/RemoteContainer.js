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
          _style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        ></RemoteButton>
        <View style={{ flexDirection: "row" }}>
          <RemoteButton
            _iconName={"arrow-left-bold"}
            _style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
          ></RemoteButton>
          <RemoteButton _text="AUTO"></RemoteButton>
          <RemoteButton
            _iconName={"arrow-right-bold"}
            _style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
          ></RemoteButton>
        </View>
        <RemoteButton
          _iconName={"arrow-down-bold"}
          _style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
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
    backgroundColor: colors.light1,
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
