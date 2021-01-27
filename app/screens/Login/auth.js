import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function Auth(props) {
  if (props.currentForm !== "Auth") {
    return null;
  }
  return (
    <View style={styles.container}>
      <AppText>Auth Text</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default Auth;
