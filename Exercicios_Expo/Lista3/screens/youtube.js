import React from "react";
import { View, Button, Alert, Linking, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const YoutubeScreen = () => {
  const abrirVideo = () => {
    const videoId = "dQw4w9WgXcQ"; // troque pelo ID desejado
    const url = `https://www.youtube.com/watch?v=${videoId}`;

    Linking.canOpenURL(url)
      .then((suportado) => {
        if (suportado) Linking.openURL(url);
        else Alert.alert("Erro", "Não foi possível abrir o YouTube.");
      })
      .catch((err) => console.error("Erro ao abrir o YouTube", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="Abrir vídeo no YouTube" onPress={abrirVideo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#222", justifyContent: "center" },
});

export default YoutubeScreen;