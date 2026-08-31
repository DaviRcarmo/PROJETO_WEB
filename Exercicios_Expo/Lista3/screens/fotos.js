import React, { useState } from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image, StyleSheet, StatusBar } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

const Fotos = () => {
  const [imagens, setImagens] = useState([]);

  const escolherDaGaleria = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImagens((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") return;
    let result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!result.canceled) {
      setImagens((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const removerImagem = (index) => {
    setImagens((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={escolherDaGaleria}>
          <MaterialIcons name="photo" size={28} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={tirarFoto} style={{ marginLeft: 12 }}>
          <MaterialIcons name="photo-camera" size={28} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {imagens.map((uri, index) => (
          <View key={index} style={styles.imagemContainer}>
            <TouchableOpacity style={styles.botaoRemover} onPress={() => removerImagem(index)}>
              <MaterialIcons name="close" size={18} color="#fff" />
            </TouchableOpacity>
            <Image source={{ uri }} style={styles.imagem} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#222" },
  topBar: {
    position: "absolute",
    top: (StatusBar.currentHeight ?? 0) + 8,
    right: 12,
    flexDirection: "row",
    zIndex: 10,
  },
  scroll: { paddingTop: (StatusBar.currentHeight ?? 0) + 48 },
  imagemContainer: { position: "relative", marginBottom: 4 },
  imagem: { width: "100%", height: 200 },
  botaoRemover: {
    position: "absolute",
    top: 6,
    left: 6,
    zIndex: 10,
    backgroundColor: "red",
    borderRadius: 12,
    padding: 2,
  },
});

export default Fotos;