import React from "react";
import { View, StyleSheet, Button, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import style from "../config/style";
import colors from "../config/colors";
import { color } from "react-native-reanimated";

function WelcomeScreen({ navigation, name }) {
  return (
    // <Screen>
    //   <Text>Welcoem Screen</Text>
    // </Screen>
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("NavLogin")}
        />
        <AppButton
          title="Register"
          color="success"
          onPress={() => navigation.navigate("NavRegister")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {},
  background: {
    flex: 1,

    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
