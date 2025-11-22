import { Text, View, StyleSheet, TextInput } from "react-native";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";
function HgaInput({ placeholder, value, onChangeText, rest }) {
  console.log(value);
  return (
    <>
      <View style={HgaInputStyle.main}>
        {!!value && <Text style={HgaInputStyle.textStyle}>{placeholder}</Text>}
        <TextInput
          style={HgaInputStyle.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    </>
  );
}

export default HgaInput;

const HgaInputStyle = StyleSheet.create({
  main: {
    marginVertical: 10,
    backgroundColor: HgaGlobalColors.White,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  input: {
    padding: 7,
    fontSize: 15,
    borderColor: "white",
  },
  textStyle: {
    fontSize: 11,
    paddingLeft: 10,
    paddingTop: 10,
    color: "grey",
  },
});
