import React from "react";
import { View, StyleSheet, Platform, TextInput, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/style";
import AppText from "./AppText/AppText";
function AppTextInput({ icon, width = "98%", label, ...rest }) {
  return (
    <View style={[styles.container, { width }]}>
      {label && <AppText style={styles.label}>{label}</AppText>}
      {icon && (
        <MaterialCommunityIcons
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
          name={icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        {...rest}
        style={defaultStyles.text}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    borderColor: defaultStyles.colors.controlBorder,
    borderWidth: 1,
    flexDirection: "row",
    // width: "100%",
    marginLeft: 5,

    padding: 15,
    marginBottom: 33,
  },
  icon: {
    marginRight: 20,
  },
  label: {
    bottom: 60,
    left: 10,

    position: "absolute",
    fontWeight: "bold",
  },
});
export default AppTextInput;
