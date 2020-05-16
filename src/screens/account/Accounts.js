import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./userLogged";
import Loading from "../../components/login";

export default function Accounts() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      user ? setLogin(false) : setLogin(true);
    });
  });

  if (login === null) return <Loading isVisible={true} text="cargando.." />;
  //   console.log(login);
  //   return login ? <UserLogged /> : <UserGuest />;
  return <UserGuest />;
}
