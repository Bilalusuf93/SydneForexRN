import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import RemitNavigator from "./RemitNavigator";
import LoginRemitNavigator from "./LoginRemitNavigator";
import MasterRegister from "../screens/Register/MasterRegister";

const Stack = createStackNavigator();
function AuthNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NavWelcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="NavLogin" component={Login} />
      <Stack.Screen name="NavRegister" component={MasterRegister} />
      <Stack.Screen name="NavRemitNavigator" component={RemitNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
