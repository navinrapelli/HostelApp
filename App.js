import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HgaLogin from "./Screen/HgaLogin";
import { HgaGlobalColors } from "./Util/HgaGlobalColors";
import HgaTwoStepAuth from "./Screen/HgaTwoStepAuth";
import HgaForgotPass from "./Screen/HgaForgotPass";
import HgaRegister from "./Screen/HgaRegister";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: HgaGlobalColors.Orange },
            headerTintColor: HgaGlobalColors.White,
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={HgaLogin}
          />
          <Stack.Screen
            name="TwoStepAuthentication"
            component={HgaTwoStepAuth}
          />
          <Stack.Screen name="ForgotPassword" component={HgaForgotPass} />
          <Stack.Screen options={{}} name="Register" children={HgaRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HgaGlobalColors.mainBg,
  },
});
