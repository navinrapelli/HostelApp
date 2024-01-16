import { Text, View, StyleSheet, TextInput, Switch } from "react-native";
import { useState } from "react";
import HgaRadioButton from "./HgaRadioButton";
import { Checkbox } from "react-native-paper";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";
import HgaSelect from "./HgaSelect";
import HgaLink from "./HgaLinks";
function HgaForms({ formList }) {
  const [inputText, setInputText] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [values, setValue] = useState("");

  const FormsList = ({ values }) => {
    switch (values) {
      case "text":
        return (
          <TextInput
            placeholder="inputText"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={HgaFormsStyle.input}
          />
        );
      case "password":
        return (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={HgaFormsStyle.input}
          />
        );
      case "phone":
        return (
          <TextInput
            inputMode="numeric"
            placeholder="MobilePhone"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={HgaFormsStyle.input}
          />
        );
      case "email":
        return (
          <TextInput
            inputMode="email"
            placeholder="MobilePhone"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={HgaFormsStyle.input}
          />
        );
      case "Password":
        return (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={HgaFormsStyle.input}
          />
        );
      case "checkbox":
        return (
          <View style={HgaFormsStyle.checkboxContainer}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() => {
                setSelection(!isSelected);
              }}
            />
            <Text style={HgaFormsStyle.label}>Remember me</Text>
          </View>
        );
      case "select":
        return <HgaSelect />;
      case "toggle":
        return (
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="purple"
          />
        );
      case "radio":
        return <HgaRadioButton />;
      case "link":
        return <HgaLink />;
      default:
        return (
          <View>
            <Text>Null</Text>
          </View>
        );
    }
  };
  return (
    <View style={HgaFormsStyle.main}>
      {formList.map((it, index) => (
        <FormsList values={it} key={index} />
      ))}
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
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: HgaGlobalColors.White,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  checkbox: {
    height: "60%",
    width: "7%",
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    margin: 4,
  },
});
