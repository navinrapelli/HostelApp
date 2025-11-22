import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import HgaPage from "../Components/HgaPage";
import HgaInput from "../Components/HgaInput";

function HgaRegister() {
  const [inputText, setInputText] = useState({});
  function inputValuesHandler(identifier, enterText) {
    console.log(identifier, enterText);
    setInputText((currentValue) => {
      return {
        ...currentValue,
        [identifier]: enterText,
      };
    });
  }
  console.log(inputText);
  return (
    <HgaPage>
      <View style={HgaRegisterStyle.main}>
        <HgaInput
          placeholder="First Name"
          onChangeText={inputValuesHandler.bind(this, "firstName")}
          value={inputText.firstName}
          keyboardAppearance="dark"
        />

        {/* <HgaInput
          placeholder={"Last Name"}
          onChangeText={inputValuesHandler.bind(this, "lastName")}
          value={inputText.lastName}
          keyboardAppearance="dark"
        />
        <HgaInput
          keyboardAppearance="dark"
          inputMode="email"
          placeholder={"Email"}
          onChangeText={inputValuesHandler.bind(this, "emailAdress")}
          value={inputText.emailAdress}
        />
        <HgaInput
          keyboardAppearance="dark"
          autoComplete="tel"
          inputMode="numeric"
          placeholder={"Phone"}
          onChangeText={inputValuesHandler.bind(this, "mobilePhone")}
          value={inputText.mobilePhone}
        /> */}
      </View>
    </HgaPage>
  );
}

export default HgaRegister;

const HgaRegisterStyle = StyleSheet.create({
  main: {
    flex: 1,
    width: 300,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
