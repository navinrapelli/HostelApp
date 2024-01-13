import { Text, View, Image, StyleSheet } from "react-native";

function HgaLogo() {
  return (
    <View style={logoStyle.container}>
      <Image
        style={logoStyle.Image}
        source={require("../Util/HgaImages/HgaLogo.jpg")}
      />
      <Text style={logoStyle.Text}>Hostel Hub</Text>
    </View>
  );
}

export default HgaLogo;

const logoStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
