import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "../CustomText";
import colors from "../../config/colors";

function RemoteButton({ _iconName, _text, _onPressIn, _onPressOut, _style }) {
  return (
    <TouchableOpacity
      style={[styles.container, _style]}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
    >
      {_iconName && (
        <MaterialCommunityIcons
          name={_iconName}
          size={80}
          color={colors.light1}
        ></MaterialCommunityIcons>
      )}
      {_text && <CustomText _text={_text}></CustomText>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RemoteButton;