import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";

function HgaButton({ color, name, onPress, fill }) {
  const buttonStyleee = [ButtonStyle.main];
  fill
    ? buttonStyleee.push({
        backgroundColor: color ? color : HgaGlobalColors.Orange,
      })
    : "";
  return (
    <Pressable onPress={onPress}>
      <View style={buttonStyleee}>
        <Text style={ButtonStyle.text}>{name}</Text>
      </View>
    </Pressable>
  );
}

export default HgaButton;

const ButtonStyle = StyleSheet.create({
  main: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 2,
    fontWeight: "bold",
    color: "black",
  },
  button2: {
    borderWidth: 2,
    borderColor: "white",
  },
});
