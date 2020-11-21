import React from "react";
import { View, StyleSheet } from "react-native";
import CustomScreen from "../components/CustomScreen";
import CustomButton from "../components/CustomButton";
import RemoteContainer from "../components/remote/RemoteContainer";
import colors from "../config/colors";
import StatContainer from "../components/remote/StatContainer";
import StreamContainer from "../components/remote/StreamContainer";

function RemoteScreen(props) {
  return (
    <CustomScreen _style={styles.screen}>
      <View style={styles.streamContainer}>
        <StreamContainer></StreamContainer>
      </View>

      <View style={styles.statContainer}>
        <StatContainer _style={styles.statContainer}></StatContainer>
      </View>

      <View style={styles.controlContainer}>
        <View style={{ flex: 1 }}>
          <CustomButton _text="Lift Up" _style={styles.button}></CustomButton>
          <CustomButton _text="Lift Down" _style={styles.button}></CustomButton>
          <CustomButton _text="Path" _style={styles.button}></CustomButton>
          <CustomButton
            _text="Disconnect"
            _style={styles.button}
          ></CustomButton>
        </View>
        <RemoteContainer></RemoteContainer>
      </View>
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
  statContainer: {},
  controlContainer: {
    flex: 1,
    backgroundColor: colors.light1,
    flexDirection: "row"
  },
  button: {
    marginHorizontal: 10,
    flex: 1
  }
});

export default RemoteScreen;
