import { Text, View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
function HgaCheckBox({ label, onPress, checkStatus }) {
  return (
    <View style={HgaCheckBoxStyle.checkboxContainer}>
      <Checkbox status={checkStatus} onPress={onPress} color="orange" />
      <Text style={HgaCheckBoxStyle.label}>{label}</Text>
    </View>
  );
}

export default HgaCheckBox;

const HgaCheckBoxStyle = StyleSheet.create({
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
