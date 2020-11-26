import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import CustomButton from "../CustomButton";

function NavigatorContainer({
  _onPressUp,
  _onPressDown,
  _onPressLeft,
  _onPressRight,
  _onPressTopLeft,
  _onPressTopRight,
  _onPressBottomLeft,
  _onPressBottomRight,
  _onPressCenter,
  _style
}) {
  const iconSize = 60;
  return (
    <View style={[styles.container, _style]}>
      <View style={styles.buttonRowContainer}>
        <CustomButton
          _iconName={"arrow-top-left-bold-outline"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressTopLeft}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-up-bold"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressUp}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-top-right-bold-outline"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressTopRight}
        ></CustomButton>
      </View>

      <View style={styles.buttonRowContainer}>
        <CustomButton
          _iconName={"arrow-left-bold"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressLeft}
        ></CustomButton>
        <CustomButton
          _text="Auto"
          _style={styles.button}
          _onPress={_onPressCenter}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-right-bold"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressRight}
        ></CustomButton>
      </View>

      <View style={styles.buttonRowContainer}>
        <CustomButton
          _iconName={"arrow-bottom-left-bold-outline"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressBottomLeft}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-down-bold"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressDown}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-bottom-right-bold-outline"}
          _iconSize={iconSize}
          _style={styles.button}
          _onPress={_onPressBottomRight}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 5,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: colors.dark,
    borderRadius: 10,
    // borderRadius: 170,
    padding: 10
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 0,
    height: "100%",
    flex: 1,
    backgroundColor: colors.red,
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: 10
  },
  buttonRowContainer: {
    flex: 1,
    flexDirection: "row"
    // backgroundColor: colors.yellow,
    // borderWidth: 1,
    // borderColor: colors.blue
  }
});

export default NavigatorContainer;
