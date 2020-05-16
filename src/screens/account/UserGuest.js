import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={{
          uri: "https://91dat.com.mx/wp-content/uploads/2017/04/lanaderey.jpg",
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat
        lectus nec fringilla molestie. Suspendisse eu faucibus lorem. Phasellus
        pellentesque pharetra neque non sagittis. Curabitur quis malesuada
        libero, ac tincidunt erat. Sed molestie orci quis sem commodo, vitae
        posuere massa convallis. Nullam tempus fermentum tellus at consectetur.{" "}
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});
