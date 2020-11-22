import React from "react";
import { View, StyleSheet } from "react-native";
import CustomScreen from "../components/CustomScreen";
import CustomButton from "../components/CustomButton";
import RemoteContainer from "../components/remote/RemoteContainer";
import colors from "../config/colors";
import StatContainer from "../components/remote/StatContainer";
import StreamContainer from "../components/remote/StreamContainer";
import useRemote from "../remote/useRemote";
import CustomText from "../components/CustomText";
import useRemoteApi from "../api/useRemoteApi";

function RemoteScreen({ navigation }) {
  const remote = useRemote();
  const remoteApi = useRemoteApi();
  return (
    <CustomScreen _style={styles.screen}>
      <View style={styles.streamContainer}>
        <StreamContainer></StreamContainer>
      </View>

      <View style={styles.statContainer}>
        <StatContainer _style={styles.statContainer}></StatContainer>
      </View>

      <CustomText
        _text={"Connected to " + remote.ip}
        _style={{
          textAlign: "center",
          margin: 5
        }}
      ></CustomText>
      <View style={styles.controlContainer}>
        <View style={{ flex: 1 }}>
          <CustomButton
            _text={"Lift"}
            _iconName={"arrow-up-bold"}
            _iconSize={30}
            _style={styles.button}
            _onPress={() => remoteApi.getCategories()}
          ></CustomButton>
          <CustomButton
            _text="Lift"
            _iconName={"arrow-down-bold"}
            _iconSize={30}
            _style={styles.button}
          ></CustomButton>
          <CustomButton _text="Path" _style={styles.button}></CustomButton>
          <CustomButton
            _text="Disconnect"
            _style={styles.button}
            _onPress={() => {
              remote.disconnect();
              navigation.navigate("Welcome");
            }}
          ></CustomButton>
        </View>
        <RemoteContainer></RemoteContainer>
      </View>
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-end"
  },
  streamContainer: {
    flex: 1.1,
    backgroundColor: colors.blue
  },
  statContainer: {},
  controlContainer: {
    flex: 0.9,
    backgroundColor: colors.light2,
    flexDirection: "row"
  },
  button: {
    marginHorizontal: 10,
    flex: 1
  }
});

export default RemoteScreen;
