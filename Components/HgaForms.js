import { Text, View, StyleSheet, TextInput, CheckBox } from "react-native";
import { useState } from "react";
import HgaRadioButton from "./HgaRadioButton";
function HgaForms() {
  const [inputText, setInputText] = useState("");
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={HgaFormsStyle.main}>
      <TextInput
        placeholder="inputText"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        style={HgaFormsStyle.input}
      />

      <View style={HgaFormsStyle.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={HgaFormsStyle.checkbox}
        />
        <Text style={HgaFormsStyle.label}>Remember me</Text>
      </View>

      <HgaRadioButton />
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
    width: "100%",
    height: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginVertical: 10,
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
