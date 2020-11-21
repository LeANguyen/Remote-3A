import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CustomText from "./CustomText";

function CustomButton({ _text, _onPress }) {
  return (
    <TouchableOpacity style={[styles.container, _style]} onPress={_onPress}>
      <CustomText _text={_text}></CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.red,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CustomButton;
