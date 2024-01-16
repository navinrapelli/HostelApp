import { Text, View, StyleSheet, Button } from "react-native";

function HgaToastSetting({ message }) {
  return (
    <View>
      <Text>{message}</Text>
      <Button />
    </View>
  );
}

export default HgaToastSetting;

const HgaToastSettingStyle = StyleSheet.create({
  main: {
    width: 300,
    height: 200,
  },
});
