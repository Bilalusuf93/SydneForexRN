import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RemitDashboard from "../screens/RemitDashboard";
import RemitNew from "../screens/RemitNew";
import RemitHistory from "../screens/RemitHistory";
import MasterLogin from "../screens/Login/masterLogin";

const Tab = createBottomTabNavigator();
function RemitNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Dashboard" }}
        name="NavRemitDashboard"
        component={RemitDashboard}
      />
      <Tab.Screen
        options={{ title: "History" }}
        name="NavRemitHistory"
        component={RemitHistory}
      />
      <Tab.Screen name="NavRemitNew" component={RemitNew} />
      <Tab.Screen
        options={{ title: "History" }}
        name="NavRemitHistory2"
        component={RemitHistory}
      />
      <Tab.Screen
        options={{ title: "History" }}
        name="NavRemitHistory1"
        component={RemitHistory}
      />
    </Tab.Navigator>
  );
}

export default RemitNavigator;
