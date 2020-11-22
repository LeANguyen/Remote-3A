import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import colors from "../config/colors";

function CustomText({ _text, _style }) {
  return <Text style={[styles.text, _style]}>{_text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark1,
    fontSize: 12,
    fontWeight: "bold"
  }
});

export default CustomText;
