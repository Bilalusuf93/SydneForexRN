import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Register(props) {
  return (
    <View style={styles.container}>
      <Text>Register Here</Text>
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

export default Register;
