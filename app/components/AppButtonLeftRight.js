import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import style from "../config/style";
import colors from "../config/colors";

function AppButtonLeftRight({
  title,
  onPress,
  color = "primary",
  width = 30,
  alignSelf = "flex-start",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { width: width },
        { alignSelf: alignSelf },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    marginHorizontal: 10,
    // width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButtonLeftRight;
