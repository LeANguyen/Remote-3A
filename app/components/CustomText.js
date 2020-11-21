import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import colors from "../config/colors";

function CustomText({ _text, _style }) {
  return <Text style={[styles.text, _style]}>{_text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    color: colors.light1,
    fontSize: 15,
    fontWeight: "bold",
    margin: 10
  }
});

export default CustomText;
