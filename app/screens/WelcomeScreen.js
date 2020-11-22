import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomScreen from "../components/CustomScreen";
import CustomTextInput from "../components/CustomTextInput";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

function WelcomeScreen({ navigation }) {
  const remote = useRemote();
  const [ip, setIp] = useState();
  return (
    <CustomScreen>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="forklift"
          size={200}
          color={colors.green}
        ></MaterialCommunityIcons>
      </View>
      <CustomText
        _text="Welcome!"
        _style={{ textAlign: "center" }}
      ></CustomText>
      <CustomTextInput
        _iconName={"ip"}
        _placeholder={"IP address..."}
        _onChangeText={value => {
          setIp(value);
        }}
      ></CustomTextInput>
      <CustomButton
        _text="Connect"
        _onPress={() => {
          remote.connect(ip);
          navigation.navigate("Remote");
        }}
      ></CustomButton>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoContainer: {
    alignItems: "center"
  }
});

export default WelcomeScreen;
