import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { size, isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

export default function LoginForm(props) {
  const { toastRef } = props;
  const [formData, setFormData] = useState(defaultFormvalue());

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  const onSubmit = () => {
    console.log(validateEmail(formData.email));
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password)
    ) {
      toastRef.current.show("todos los campos son obligatorios");
      console.log("todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("email invalido");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "El password tiene que tener al menos 6 caracteres.",
      );
    } else {
      setLoading(true);
      firebase.auth().signInWithEmailAndPassword(
        formData.email,
        formData.password,
      ).then(() => {
        setLoading(false);
        navigation.navigate("account");
      }).catch(() => {
        setLoading(false);
        toastRef.current.show("El email no existe.");
      });
    }
  };
  return (
    <View style={styles.formContainer}>
      <Input
        onChange={(e) => onChange(e, "email")}
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        rightIcon={<Icon
          type="material=community"
          name="at"
          iconStyle={styles.iconRight}
        />}
      />
      <Input
        onChange={(e) => onChange(e, "password")}
        placeholder="Password"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon
          type="material=community"
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          iconStyle={styles.iconRight}
          onPress={() => setShowPassword(!showPassword)}
        />}
      />
      <Button
        onPress={onSubmit}
        title="Iniciar sesion"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
      />
      <Loading
        isVisible={loading}
        text="Iniciando sesion"
      />
    </View>
  );
}
function defaultFormvalue() {
  return {
    email: "",
    password: "",
  };
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
