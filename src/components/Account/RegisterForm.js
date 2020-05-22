import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
export default function RegisterForm(props) {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormvalue());

  const onSubmit = () => {
    console.log(validateEmail(formData.email));
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("todos los campos son obligatorios");
      console.log("todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("email invalido");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("password no coinciden");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "El password tiene que tener al menos 6 caracteres."
      );
    } else {
      console.log("ok");
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForms}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForms}
        password={true}
        onChange={(e) => onChange(e, "password")}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Repeat password"
        containerStyle={styles.inputForms}
        onChange={(e) => onChange(e, "repeatPassword")}
        password={true}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name={repeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setRepeatPassword(!repeatPassword)}
          />
        }
      />
      <Button
        onPress={onSubmit}
        title="Unirse"
        buttonStyle={styles.btnRegister}
        containerStyle={styles.btnContainerRegister}
      />
    </View>
  );
}
function defaultFormvalue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 30,
  },
  inputForms: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
