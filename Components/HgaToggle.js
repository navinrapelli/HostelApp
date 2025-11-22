import { Text, View, StyleSheet, Switch } from "react-native";
import { useState } from "react";
function HgaToggle({ label, isRight, onValueChange, value, rest }) {
  return (
    <View style={HgaToggleStyle.main}>
      {!!isRight && <Text style={HgaToggleStyle.labelRight}>{label}</Text>}

      <Switch
        style={HgaToggleStyle.toggle}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      />
      {!isRight && <Text style={HgaToggleStyle.labelRight}>{label}</Text>}
    </View>
  );
}

export default HgaToggle;

const HgaToggleStyle = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  labelRight: {
    fontSize: 18,
    marginHorizontal: 15,
  },
});
