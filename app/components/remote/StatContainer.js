import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../CustomText";
import colors from "../../config/colors";

function StatContainer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <CustomText _text="Velocity" _style={styles.text}></CustomText>
        <CustomText _text="..." _style={styles.text}></CustomText>
      </View>
      <View style={styles.statContainer}>
        <CustomText _text="Distance" _style={styles.text}></CustomText>
        <CustomText _text="..." _style={styles.text}></CustomText>
      </View>
      <View style={styles.statContainer}>
        <CustomText _text="???" _style={styles.text}></CustomText>
        <CustomText _text="..." _style={styles.text}></CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light1
  },
  statContainer: { flex: 1, alignItems: "center", padding: 5 },
  text: {
    margin: 0,
    fontWeight: "normal"
  }
});

export default StatContainer;
