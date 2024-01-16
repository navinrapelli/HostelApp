import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function HgaButton({ color, name, onPress, fill }) {
  const buttonStyleee = [ButtonStyle.main];
  fill ? buttonStyleee.push({ backgroundColor: color }) : "";
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
    margin: 2,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 2,
    fontWeight: "bold",
    color: "white",
  },
  button2: {
    borderWidth: 2,
    borderColor: "white",
  },
});
