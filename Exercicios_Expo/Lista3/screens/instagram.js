import React from "react";
import { View, Button, Alert, Linking, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const InstagramScreen = () => {
  const abrirInstagram = () => {
    const url = "https://www.instagram.com/etec_sjc195";

    Linking.canOpenURL(url)
      .then((suportado) => {
        if (suportado) Linking.openURL(url);
        else Alert.alert("Erro", "Não foi possível abrir o Instagram.");
      })
      .catch((err) => console.error("Erro ao abrir o Instagram", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Abrir Instagram da ETEC" onPress={abrirInstagram} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#222", justifyContent: "center" },
});

export default InstagramScreen;