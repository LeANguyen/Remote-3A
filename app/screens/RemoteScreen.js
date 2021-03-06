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
          _onPress1={() => {
            console.log("Lift up");
          }}
          _onPress2={() => console.log("Lift down")}
          _onPress3={() => console.log("Show Path")}
          _onPress4={() => {
            remote.disconnect();
            navigation.navigate("Welcome");
          }}
          _style={{ flex: 0.75 }}
        ></UtilityContainer>
        <NavigatorContainer
          _onPressUp={() => remoteApi.moveForward()}
          _onPressDown={() => remoteApi.moveBackward()}
          _onPressLeft={() => remoteApi.moveLeft()}
          _onPressRight={() => remoteApi.moveRight()}
          _onPressTopLeft={() => remoteApi.moveTopLeft()}
          _onPressTopRight={() => remoteApi.moveTopRight()}
          _onPressBottomLeft={() => remoteApi.moveBottomLeft()}
          _onPressBottomRight={() => remoteApi.moveBottomRight()}
          _onPressCenter={() => console.log("Auto mode started")}
          _style={{ flex: 1.25 }}
        ></NavigatorContainer>
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
    backgroundColor: colors.light,
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
