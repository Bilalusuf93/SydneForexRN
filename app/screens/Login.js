import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import RemitNavigator from "../navigation/RemitNavigator";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Loign Screen</Text>
      <AppButton
        onPress={() => navigation.navigate("NavRemitNavigator")}
        title="Login"
        color="primary"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
