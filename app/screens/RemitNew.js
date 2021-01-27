import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
function RemitNew(props) {
  return (
    <Screen>
      <AppTextInput
        width="50%"
        placeholder="text here 1"
        label="Nationality:"
      />
      <AppTextInput placeholder="text here 1" label="Nationality:" />
      <AppTextInput placeholder="text here 1" label="Nationality:" />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default RemitNew;
