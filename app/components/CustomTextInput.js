import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function CustomTextInput({
  _keyboardType,
  _placeholder,
  _iconName,
  _onChangeText,
  _style,
  _value
}) {
  return (
    <View style={[styles.container, _style]}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={_iconName}
        size={30}
        color={colors.dim}
      ></MaterialCommunityIcons>
      <TextInput
        value={_value}
        style={styles.text}
        placeholder={_placeholder}
        placeholderTextColor={colors.dim}
        clearButtonMode="always"
        keyboardType={_keyboardType}
        onChangeText={_onChangeText}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: colors.light1,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: colors.dim
  },
  icon: {
    margin: 10
  },
  text: {
    color: colors.dark1,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    fontSize: 12,
    flex: 1,
    marginVertical: 10
  }
});

export default CustomTextInput;
