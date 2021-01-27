import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function Test2(props) {
  if (props.currentForm !== "Test2") return null;
  return (
    <View style={styles.container}>
      <AppText>Test2</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Test2;
