import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from "../screens/account/Accounts";
import Login from "../screens/account/login";
import Register from "../screens/account/register";

const Stack = createStackNavigator();

export default function AcountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Accounts}
        options={{ title: "My Account" }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar sesion" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
}
