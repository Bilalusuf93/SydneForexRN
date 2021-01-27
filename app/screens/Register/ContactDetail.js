import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function ContactDetail(props) {
  if (props.currentForm !== "ContactDetail") return null;
  return (
    <>
      <AppText>Contact Detail</AppText>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default ContactDetail;
