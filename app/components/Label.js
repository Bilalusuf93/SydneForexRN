import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

function Label({ text }) {
  return (
    <View style={styles.container}>
      <AppText />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Label;
