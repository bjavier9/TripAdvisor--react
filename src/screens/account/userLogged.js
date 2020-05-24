import React from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
  return (
    <View>
      <Text>userLogged</Text>
      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}
