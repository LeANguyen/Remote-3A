import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";

function CustomScreen({ children, _style }) {
  return (
    <SafeAreaView style={[styles.screen, _style]}>
      <View style={[styles.view, _style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
    // paddingBottom: Constants.statusBarHeight
  },
  view: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: colors.light2
  }
});

export default CustomScreen;
