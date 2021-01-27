import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText/AppText";

function AddressDetail(props) {
  if (props.currentForm !== "AddressDetail") return null;
  return (
    <>
      <AppText>Address Detal</AppText>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default AddressDetail;
