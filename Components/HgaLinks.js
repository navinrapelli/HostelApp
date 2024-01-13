import { Text, View, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { HgaGlobalColors } from "../Util/HgaGlobalColors";

function HgaLink({ children, screen, params }) {
  return (
    <Link style={LinkStyle.main} to={{ screen: screen, params: params }}>
      {children}
    </Link>
  );
}

export default HgaLink;

const LinkStyle = StyleSheet.create({
  main: {
    color: HgaGlobalColors.Blue,
    fontWeight: "bold",
  },
});
