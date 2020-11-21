import React from "react";
import { View, StyleSheet } from "react-native";
import CustomScreen from "../components/CustomScreen";
import CustomButton from "../components/CustomButton";
import RemoteContainer from "../components/remote/RemoteContainer";
import colors from "../config/colors";

function RemoteScreen(props) {
  return (
    <CustomScreen _style={styles.screen}>
      <View style={styles.streamContainer}></View>
      <View style={styles.streamContainer}></View>
      <RemoteContainer></RemoteContainer>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-end"
  },
  streamContainer: {
    flex: 1,
    backgroundColor: colors.blue
  },
  controlPanel: {}
});

export default RemoteScreen;
