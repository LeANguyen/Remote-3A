import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import RemoteScreen from "../screens/RemoteScreen";

const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"Remote"}
        component={RemoteScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppNavigator;
