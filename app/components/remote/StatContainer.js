import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../CustomText";
import colors from "../../config/colors";

function StatContainer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <CustomText _text="Velocity" _style={styles.text}></CustomText>
        <CustomText _text="(m/s)" _style={styles.text}></CustomText>
        <CustomText _text="5" _style={styles.text}></CustomText>
      </View>
      <View style={styles.statContainer}>
        <CustomText _text="Distance" _style={styles.text}></CustomText>
        <CustomText _text="(m)" _style={styles.text}></CustomText>
        <CustomText _text="100" _style={styles.text}></CustomText>
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
    backgroundColor: colors.dark
  },
  statContainer: { flex: 1, alignItems: "center", padding: 5 },
  text: {
    margin: 0,
    color: "rgb(255, 255, 255)"
  }
});

export default StatContainer;
