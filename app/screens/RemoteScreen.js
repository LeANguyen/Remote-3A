import React from "react";
import { View, StyleSheet } from "react-native";
import CustomScreen from "../components/CustomScreen";
import colors from "../config/colors";
import StatContainer from "../components/remote/StatContainer";
import StreamContainer from "../components/remote/StreamContainer";
import useRemote from "../remote/useRemote";
import CustomText from "../components/CustomText";
import useRemoteApi from "../api/useRemoteApi";
import NavigatorContainer from "../components/remote/NavigatorContainer";
import UtilityContainer from "../components/remote/UtilityContainer";

function RemoteScreen({ navigation }) {
  const remote = useRemote();
  const remoteApi = useRemoteApi();

  return (
    <CustomScreen _style={styles.screen}>
      <View style={styles.streamContainer}>
        <StreamContainer
          _uri={"https://theinpaint.com/images/example-1-2.jpg"}
        ></StreamContainer>
      </View>

      <View style={styles.statContainer}>
        <StatContainer _style={styles.statContainer}></StatContainer>
      </View>

      <CustomText
        _text={"Connected to " + remote.ip}
        _style={styles.connectText}
      ></CustomText>

      <View style={styles.remoteContainer}>
        <UtilityContainer
          _onPress4={() => {
            remote.disconnect();
            navigation.navigate("Welcome");
          }}
        ></UtilityContainer>
        <NavigatorContainer></NavigatorContainer>
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
  remoteContainer: {
    flex: 0.9,
    backgroundColor: colors.light1,
    flexDirection: "row"
  },
  connectText: {
    textAlign: "center",
    margin: 0,
    padding: 5,
    backgroundColor: colors.yellow,
    color: "rgb(55, 55, 55)"
  }
});

export default RemoteScreen;
