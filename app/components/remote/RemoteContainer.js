import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import CustomButton from "../CustomButton";

function RemoteContainer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.controlPanel2}>
        <CustomButton
          _iconName={"arrow-up-bold"}
          _iconSize={80}
          _style={[
            { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
            styles.button
          ]}
        ></CustomButton>
        <View style={{ flexDirection: "row" }}>
          <CustomButton
            _iconName={"arrow-left-bold"}
            _iconSize={80}
            _style={[
              { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
              styles.button
            ]}
          ></CustomButton>
          <CustomButton _text="Auto" _style={styles.button}></CustomButton>
          <CustomButton
            _iconName={"arrow-right-bold"}
            _iconSize={80}
            _style={[
              { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
              styles.button
            ]}
          ></CustomButton>
        </View>
        <CustomButton
          _iconName={"arrow-down-bold"}
          _iconSize={80}
          _style={[
            { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
            styles.button
          ]}
        ></CustomButton>
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
  button: {
    marginHorizontal: 0,
    marginVertical: 0,
    width: 80,
    height: 80,
    borderRadius: 0
  },
  controlPanel1: {},
  controlPanel2: {
    // flexDirection: "row"
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RemoteContainer;
