import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./app/components/CustomButton";
import RemoteScreen from "./app/screens/RemoteScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppNavigator from "./app/navigation/AppNavigator";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import RemoteContext from "./app/remote/RemoteContext";

export default function App() {
  const [ip, setIp] = useState();
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  // return <RemoteScreen></RemoteScreen>;
  // return <WelcomeScreen></WelcomeScreen>;
  // return (
  //   <NavigationContainer>
  //     <AppNavigator></AppNavigator>
  //   </NavigationContainer>
  // );
  return (
    <RemoteContext.Provider value={{ ip, setIp }}>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </RemoteContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
