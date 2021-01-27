import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";
import AppTextInput from "../../components/AppTextInput";

function LoginDetail(props) {
  if (props.currentForm !== "LoginDetail") return null;

  return (
    <View style={styles.container}>
      <AppTextInput placeholder="text here 1" label="Nationality:" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default LoginDetail;
