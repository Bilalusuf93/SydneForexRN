import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import Register from "../screens/Register";
import AuthNavigator from "./AuthNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import SideBar from "../screens/SideBar";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
      <Drawer.Screen name="NavDashNoard" component={AuthNavigator} />
      <Drawer.Screen name="NavAboutUs" component={AboutUs} />
      <Drawer.Screen name="NavContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
};
