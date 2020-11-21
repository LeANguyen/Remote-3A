import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./app/components/CustomButton";
import RemoteScreen from "./app/screens/RemoteScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  // return <RemoteScreen></RemoteScreen>;
  return <WelcomeScreen></WelcomeScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
