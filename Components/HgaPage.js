import { Text, View, ScrollView, StyleSheet } from "react-native";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";

function HgaPage({ children }) {
  return (
    <ScrollView style={PageStyle.main}>
      <View style={PageStyle.content}>{children}</View>
    </ScrollView>
  );
}
export default HgaPage;

const PageStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: HgaGlobalColors.mainBg,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
