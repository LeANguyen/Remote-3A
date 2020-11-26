import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CustomText from "./CustomText";

function CustomButton({ _iconName, _iconSize, _text, _onPress, _style }) {
  return (
    <TouchableOpacity style={[styles.container, _style]} onPress={_onPress}>
      {_iconName && (
        <MaterialCommunityIcons
          name={_iconName}
          size={_iconSize}
          color={"rgb(255, 255, 255)"}
        ></MaterialCommunityIcons>
      )}
      {_text && <CustomText _text={_text} _style={styles.text}></CustomText>}
      {/* <CustomText _text={_text} _style={styles.text}></CustomText> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: colors.red,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text: {
    color: "rgb(255, 255, 255)"
  }
});

export default CustomButton;
