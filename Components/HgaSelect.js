import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { keyboardProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";

function HgaSelect() {
  const dummy = [
    "Solapur",
    "Satara",
    "samgli",
    "Pune",
    "Mumbai",
    "Bid",
    "kholpaur",
    "tuljapur",
    "kokan",
  ];
  const [selectValue, setSelect] = useState("Select");
  const [isModelVisible, setVisible] = useState(false);

  function onOptionPressed(inputText) {
    setVisible(false);
    setSelect(inputText);
  }

  function renderItem({ item }) {
    return (
      <Pressable onPress={onOptionPressed.bind(this, item)}>
        <View style={HgaSelectStyle.items}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View>
      <TextInput
        caretHidden={true}
        style={HgaSelectStyle.input}
        keyboardAppearance="false"
        onFocus={() => setVisible(true)}
        value={selectValue}
      ></TextInput>
      <Modal animationType="fade" transparent={true} visible={isModelVisible}>
        <View style={HgaSelectStyle.mainModal}>
          <View style={HgaSelectStyle.innerContinderModal}>
            <TextInput placeholder="Search" />
            <FlatList
              data={dummy}
              renderItem={renderItem}
              keyExtractor={(item, index) => item[index]}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default HgaSelect;

const HgaSelectStyle = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginVertical: 10,
  },
  mainModal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContinderModal: {
    padding: 10,
    width: 300,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: HgaGlobalColors.mainBg,
  },
  items: {
    backgroundColor: HgaGlobalColors.mainBGDarK,
    borderBottomColor: HgaGlobalColors.Black,
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
  },
});
