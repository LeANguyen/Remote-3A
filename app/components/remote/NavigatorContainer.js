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
  _onPressCenter
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <CustomButton
          _iconName={"arrow-top-left-bold-outline"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressTopLeft}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-up-bold"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressUp}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-top-right-bold-outline"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressTopRight}
        ></CustomButton>
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          _iconName={"arrow-left-bold"}
          _iconSize={80}
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
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressRight}
        ></CustomButton>
      </View>

      <View style={{ flexDirection: "row" }}>
        <CustomButton
          _iconName={"arrow-bottom-left-bold-outline"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressBottomLeft}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-down-bold"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressDown}
        ></CustomButton>
        <CustomButton
          _iconName={"arrow-bottom-right-bold-outline"}
          _iconSize={80}
          _style={styles.button}
          _onPress={_onPressBottomRight}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light2,
    // borderRadius: 170,
    padding: 10
  },
  button: {
    marginHorizontal: 0,
    marginVertical: 0,
    width: 80,
    height: 80,
    borderRadius: 0,
    backgroundColor: colors.red,
    borderWidth: 1,
    borderColor: colors.light2,
    borderRadius: 5
  }
});

export default NavigatorContainer;
