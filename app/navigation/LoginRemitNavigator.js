import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import RemitNavigator from "./RemitNavigator";

const Stack = createStackNavigator();
function LoginRemitNavigator(props) {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="NavLogin"
        component={Login}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        name="RemitNavigator"
        component={RemitNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default LoginRemitNavigator;
