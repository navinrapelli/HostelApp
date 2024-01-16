import { Text, View } from "react-native";
import HgaPage from "../Components/HgaPage";
import HgaForms from "../Components/HgaForms";
function HgaRegister() {
  const formRenderList = ["email", "radio", "toggle"];
  return (
    <HgaPage>
      <HgaForms formList={formRenderList} />
    </HgaPage>
  );
}

export default HgaRegister;
