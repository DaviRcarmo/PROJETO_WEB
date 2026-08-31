import React from "react";
import { View, Button, Alert, Linking, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const DiscadorScreen = () => {
  const abrirDiscador = () => {
    const numero = "1234567890";
    const url = `tel:${numero}`;

    Linking.canOpenURL(url)
      .then((suportado) => {
        if (suportado) Linking.openURL(url);
        else Alert.alert("Erro", "Este dispositivo não suporta chamadas.");
      })
      .catch((err) => console.error("Erro ao abrir o discador", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Ligar" onPress={abrirDiscador} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#222", justifyContent: "center" },
});

export default DiscadorScreen;