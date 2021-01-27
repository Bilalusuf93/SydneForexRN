import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";

import DrawerNavigator from "./app/navigation/DrawerNavigator";
// const DrawerNavigator = createDrawerNavigator({
//   ProfileScree,
//   MessageScreen,
//   ActivityScreen,
//   LoginScreen,
//   NotficaScreen,
//   ReportScreen,
// });
export default function App() {
  return (
    // <Navigator />
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
