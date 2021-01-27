import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import AddressDetail from "./AddressDetail";
import ContactDetail from "./ContactDetail";
import LoginDetail from "./LoginDetail";
import Screen from "../../components/Screen";
import AppButtonLeftRight from "../../components/AppButtonLeftRight";
import AppTextInput from "../../components/AppTextInput";
const childForms = ["LoginDetail", "ContactDetail", "AddressDetail"];
function MsterRegister(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentForm, setCurrentForm] = useState(childForms[currentStep - 1]);

  const _next = (e) => {
    e.preventDefault();
    let step = currentStep;
    step = step >= childForms.length - 1 ? childForms.length : step + 1;
    setCurrentStep(step);
    setCurrentForm(childForms[step - 1]);
  };

  const _prev = (e) => {
    e.preventDefault();
    let step = currentStep;
    step = step <= 1 ? 1 : step - 1;
    setCurrentStep(step);
    setCurrentForm(childForms[step - 1]);
  };

  const previousButton = () => {
    let step = currentStep;

    if (step !== 1) {
      return (
        <AppButtonLeftRight
          onPress={_prev}
          title="Prev"
          width={100}
          color="primary"
        />
      );
    }
    return null;
  };
  const nextButton = () => {
    let step = currentStep;

    if (step < childForms.length) {
      return (
        <AppButtonLeftRight
          onPress={_next}
          title="Next"
          width={100}
          color="primary"
          alignSelf="flex-end"
        />
        // <button
        //   className="btn btn-primary btn-sm mt-3 float-right"
        //   type="button"
        //   onClick={this._next}
        // >
        //   Next
        // </button>
      );
    }
    return null;
  };

  return (
    <Screen style={styles.container}>
      <AppTextInput placeholder="text here 1" label="Nationality:" />
      <LoginDetail currentForm={currentForm} />
      <ContactDetail currentForm={currentForm} />
      <AddressDetail currentForm={currentForm} />
      <View style={styles.NextPrevBtn}>
        {previousButton()}
        {nextButton()}
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {},
  NextPrevBtn: {
    flexDirection: "row",
    justifyContent: "center", // it acts with ur primary axis ,currently it is set to row abov
    position: "relative",
  },
});

export default MsterRegister;
