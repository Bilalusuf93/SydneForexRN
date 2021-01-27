import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function Login(props) {
  if (props.currentForm !== "Login") {
    return null;
  }
  return (
    <View style={styles.container}>
      <AppText>Login text</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Login;
