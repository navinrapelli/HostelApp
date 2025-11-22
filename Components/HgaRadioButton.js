import { Text, View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
function HgaRadioButton() {
  const [checked, setChecked] = useState("first");
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setChecked(value)}
        value={checked}
      >
        <View>
          <RadioButton.Item
            color="orange"
            position="leading"
            value="first"
            label="First"
          />
          <RadioButton.Item
            color="orange"
            position="leading"
            value="second"
            label="Second"
          />
        </View>
      </RadioButton.Group>
    </View>
  );
}

export default HgaRadioButton;

const HgaRadioButtonStyle = StyleSheet.create({});
