import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Login from "./login";
import Auth from "./auth";
import Test from "./Test";
import Test2 from "./Test2";
import AppButton from "../../components/AppButton";
import AppButtonLeftRight from "../../components/AppButtonLeftRight";

const childForms = ["Login", "Auth", "Test", "Test2"];
function MasterLogin(props) {
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
    <View style={styles.container}>
      <Login currentStep={currentStep} currentForm={currentForm} />
      <Auth currentStep={currentStep} currentForm={currentForm} />
      <Test currentStep={currentStep} currentForm={currentForm} />
      <Test2 currentStep={currentStep} currentForm={currentForm} />
      {/* <AppButton title="Prev" /> */}
      <View style={styles.NextPrevBtn}>
        {previousButton()}
        {nextButton()}
      </View>
    </View>
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

export default MasterLogin;
