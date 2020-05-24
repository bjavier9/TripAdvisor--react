import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/b/bc/Pornhub-style_GitHub_logo.png",
        }}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegistrer}>
      Aun no tienes cuenta?{""}
      <Text
        style={styles.btnRegistrer}
        onPress={() => navigation.navigate("register")}
      >
        Registrate
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
    borderRadius: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegistrer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegistrer: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
