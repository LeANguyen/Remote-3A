import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import CustomButton from "../CustomButton";
import useRemoteApi from "../../api/useRemoteApi";
import useRemote from "../../remote/useRemote";

function UtilityContainer({
  _onPress1,
  _onPress2,
  _onPress3,
  _onPress4,
  _style
}) {
  const iconSize = 30;
  return (
    <View style={[styles.container, _style]}>
      <CustomButton
        _text={"Lift"}
        _iconName={"arrow-up-bold"}
        _iconSize={iconSize}
        _style={[{ backgroundColor: colors.green }, styles.button]}
        _onPress={_onPress1}
      ></CustomButton>
      <CustomButton
        _text="Lift"
        _iconName={"arrow-down-bold"}
        _iconSize={iconSize}
        _style={[{ backgroundColor: colors.green }, styles.button]}
        _onPress={_onPress2}
      ></CustomButton>
      <CustomButton
        _text="Path"
        _style={[{ backgroundColor: colors.blue }, styles.button]}
        _onPress={_onPress3}
      ></CustomButton>
      <CustomButton
        _text="Disconnect"
        _style={styles.button}
        _onPress={_onPress4}
      ></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginRight: 5,
    backgroundColor: colors.dark,
    borderRadius: 10,
    flex: 1
  },
  button: {
    marginHorizontal: 10,
    flex: 1
  }
});

export default UtilityContainer;
