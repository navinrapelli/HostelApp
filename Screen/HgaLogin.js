import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import HgaLogo from "../Components/HgaLogo";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";
import HgaButton from "../Components/HgaButton";
import HgaLink from "../Components/HgaLinks";
import { LoginText } from "../Util/HgaContentEn";
import { Checkbox } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import HgaInput from "../Components/HgaInput";
function HgaLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const toast = useToast();

  const handleLogin = () => {
    toast.show("hiiiiii");
  };

  return (
    <View style={loginStyle.container}>
      <HgaLogo />
      <View style={loginStyle.box}>
        <View style={loginStyle.inputs}>
          <HgaInput
            keyboardAppearance="dark"
            placeholder={LoginText.Username}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <HgaInput
            keyboardAppearance="dark"
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <View style={loginStyle.checkboxContainer}>
            <Checkbox
              status={isSelected ? "checked" : "unchecked"}
              onPress={() => {
                setSelection(!isSelected);
              }}
            />
            <Text style={loginStyle.label}>Remember Me</Text>
          </View>

          <HgaButton fill={true} onPress={handleLogin} name="Login" />
        </View>
        <View style={loginStyle.Links}>
          <HgaLink screen="ForgotPassword">ForgotPassword ?</HgaLink>
          <HgaLink screen="Register">Create New Account</HgaLink>
        </View>
      </View>
      <View>
        <Text style={loginStyle.slogn}>
          "HostelHub: Your Gateway to Hassle-Free Stays!"
        </Text>
      </View>
      {/* <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" />
      </View> */}
    </View>
  );
}

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F4EC",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  Image: {
    width: 60,
    height: 60,
  },
  box: {
    paddingTop: 20,
    shadowOffset: { width: 20, height: 10 },
    shadowOpacity: 10,
    shadowColor: "black",
    shadowRadius: 30,
    borderColor: HgaGlobalColors.mainBGDarK,
    borderRadius: 20,
    borderWidth: 2,
    width: 350,
    height: 350,
  },
  inputs: {
    padding: 15,
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
  Links: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  slogn: {
    fontWeight: "700",
    paddingTop: 50,
    color: HgaGlobalColors.Black,
  },
});

export default HgaLogin;
