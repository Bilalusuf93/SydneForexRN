import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function Test(props) {
  if (props.currentForm !== "Test") {
    return null;
  }
  return (
    <View style={styles.container}>
      <AppText>Test Text</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Test;
