import { Text, View, StyleSheet, Switch, Button } from "react-native";
import { useState } from "react";
import HgaRadioButton from "./HgaRadioButton";
import HgaSelect from "./HgaSelect";
import HgaButton from "./HgaButton";
import HgaInput from "./HgaInput";
import HgaToggle from "./HgaToggle";
import HgaCheckBox from "./HgaCheckBox";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";
function HgaForms({
  formList,
  cancelLabel,
  submitLabel,
  onPressCancel,
  onPressSubmit,
  previousValues,
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  let inputData = {};

  function onFormSubmit(enterText) {
    inputData = { ...enterText };
  }

  function submitHandler() {
    const data = Object.keys(inputData) != 0 ? inputData : previousValues;
    console.log(data);
    onPressSubmit(data);
  }

  const FormsList = ({ data, onFormSubmit }) => {
    const [inputText, setInputText] = useState(previousValues);
    const [isSelected, setSelection] = useState(false);

    function selectChecbox() {
      setSelection(!isSelected);
      inputValuesHandler(data.name, !isSelected);
    }

    function inputValuesHandler(identifier, enterText) {
      console.log(identifier, enterText);
      setInputText((currentValue) => {
        return {
          ...currentValue,
          [identifier]: enterText,
        };
      });
      for (let keys in previousValues) {
        if (keys === identifier) {
          previousValues[keys] = enterText;
        }
      }
      onFormSubmit(inputText);
    }

    switch (data.type) {
      case "text":
        return (
          <HgaInput
            placeholder={data.content}
            onChangeText={inputValuesHandler.bind(this, data.name)}
            value={inputText[data.name]}
            keyboardAppearance="dark"
          />
        );
      case "password":
        return (
          <HgaInput
            keyboardAppearance="dark"
            placeholder={data.content}
            secureTextEntry
            onChangeText={inputValuesHandler.bind(this, data.name)}
            value={inputText[data.name]}
          />
        );
      case "confirmPassword":
        return (
          <HgaInput
            keyboardAppearance="dark"
            placeholder={data.content}
            secureTextEntry
            onChangeText={inputValuesHandler.bind(this, data.name)}
            value={inputText[data.name]}
          />
        );
      case "phone":
        return (
          <HgaInput
            keyboardAppearance="dark"
            autoComplete="tel"
            inputMode="numeric"
            placeholder={data.content}
            onChangeText={inputValuesHandler.bind(this, data.name)}
            value={inputText[data.name]}
          />
        );
      case "email":
        return (
          <HgaInput
            keyboardAppearance="dark"
            inputMode="email"
            placeholder={data.content}
            onChangeText={inputValuesHandler.bind(this, data.name)}
            value={inputText[data.name]}
          />
        );
      case "checkbox":
        return (
          <HgaCheckBox
            label={data.content}
            checkStatus={isSelected ? "checked" : "unchecked"}
            onPress={selectChecbox}
          />
        );
      case "select":
        return (
          <HgaSelect
            data={data.params}
            value={inputValuesHandler.bind(this, data.name)}
          />
        );
      case "toggle":
        return (
          <HgaToggle
            label="isOk"
            trackColor={{
              false: HgaGlobalColors.Orange,
              true: HgaGlobalColors.Orange,
            }}
            thumbColor={
              isEnabled ? HgaGlobalColors.Orange : HgaGlobalColors.Orange
            }
            ios_backgroundColor="orange"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        );
      case "radio":
        return <HgaRadioButton />;
      default:
        return (
          <View>
            <Text>Null</Text>
          </View>
        );
    }
  };

  const ActionButtons = () => {
    return (
      <View style={HgaFormsStyle.buttons}>
        <Button name={submitLabel} onPress={submitHandler} />
        <Button name={cancelLabel} onPress={onPressCancel} />
      </View>
    );
  };

  return (
    <View style={HgaFormsStyle.main}>
      {formList.map((data, index) => (
        <FormsList
          data={data}
          key={index}
          initialvalues={previousValues}
          onFormSubmit={onFormSubmit}
        />
      ))}
      <ActionButtons />
    </View>
  );
}

export default HgaForms;

const HgaFormsStyle = StyleSheet.create({
  main: {
    flex: 1,
    width: 300,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  buttons: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
