import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AboutUs(props) {
  return (
    <View style={styles.container}>
      <Text>About us</Text>
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

export default AboutUs;
