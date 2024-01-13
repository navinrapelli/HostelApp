import React, { useState } from "react";
import { CheckBox, View, Text, TextInput, StyleSheet } from "react-native";
import HgaLogo from "../Components/HgaLogo";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";
import HgaButton from "../Components/HgaButton";
import HgaLink from "../Components/HgaLinks";
import { LoginText } from "../Util/HgaContentEn";
function HgaLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  function handleLogin() {
    console.log("Login button pressed");
  }

  return (
    <View style={loginStyle.container}>
      <HgaLogo />
      <View style={loginStyle.box}>
        <View style={loginStyle.inputs}>
          <TextInput
            style={loginStyle.input}
            placeholder={LoginText.Username}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <TextInput
            style={loginStyle.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <View style={loginStyle.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={loginStyle.checkbox}
            />
            <Text style={loginStyle.label}>Remember me</Text>
          </View>

          <HgaButton
            fill={true}
            name="Login"
            color={HgaGlobalColors.Orange}
            onPress={handleLogin}
          />
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
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowColor: "grey",
    shadowRadius: 10,
    borderColor: HgaGlobalColors.mainBGDarK,
    borderRadius: 20,
    borderWidth: 1,
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
