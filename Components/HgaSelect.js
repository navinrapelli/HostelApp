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

  function showList() {
    setVisible(true);
  }

  function onCancel() {
    setVisible(false);
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
      <View>
        <View style={HgaSelectStyle.inputLable}>
          <TextInput
            caretHidden={true}
            style={HgaSelectStyle.input}
            keyboardAppearance="false"
            onFocus={showList}
            value={selectValue}
          ></TextInput>
          <Pressable onPress={showList} style={HgaSelectStyle.arrowStyle}>
            <Ionicons name="arrow-down-circle" size={30} />
          </Pressable>
        </View>

        <Modal animationType="fade" transparent={true} visible={isModelVisible}>
          <View style={HgaSelectStyle.main}>
            <View style={HgaSelectStyle.innerContinderModal}>
              <View style={HgaSelectStyle.cross}>
                <Text style={{ fontWeight: "bold" }}>Select</Text>
                <Pressable onPress={onCancel}>
                  <Ionicons name="close-circle-outline" size={25} />
                </Pressable>
              </View>
              <TextInput
                style={HgaSelectStyle.itemsSearch}
                placeholder="Search"
              />
              <FlatList
                data={dummy}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default HgaSelect;

const HgaSelectStyle = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContinderModal: {
    padding: 10,
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "grey",
  },
  items: {
    padding: 5,
  },
  itemsSearch: {
    backgroundColor: HgaGlobalColors.White,
    borderBottomColor: HgaGlobalColors.Black,
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
  },
  arrowStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  inputLable: {
    borderColor: "gray",
    backgroundColor: HgaGlobalColors.White,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  cross: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
