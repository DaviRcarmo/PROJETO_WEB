import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, TextInput, ScrollView, StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";

const Cinco = () => {
  const [mode, setMode] = useState("portrait");
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const lerOrientacao = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      atualizarModo(orientation);
    };
    lerOrientacao();

    const subscription = ScreenOrientation.addOrientationChangeListener(
      ({ orientationInfo }) => atualizarModo(orientationInfo.orientation)
    );

    return () => ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  const atualizarModo = (orientation) => {
    if (
      orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) setMode("portrait");
    else if (
      orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
      orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
    ) setMode("landscape");
  };

  const adicionarNome = () => {
    if (nome.trim().length > 0) {
      setNomes((prev) => [...prev, nome]);
      setNome("");
    }
  };

  const styles = mode === "landscape" ? landscapeStyles : portraitStyles;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Exercício 5</Text>
      </View>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        returnKeyType="done"
        onSubmitEditing={adicionarNome}
      />
      <ScrollView style={styles.lista}>
        {nomes.map((n, index) => (
          <Text key={index} style={styles.nomeItem}>{n}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const portraitStyles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  titleBar: { padding: 12, alignItems: "center", backgroundColor: "#FFA07A" },
  titleText: { fontWeight: "bold" },
  label: { color: "#000", marginTop: 8, marginHorizontal: 12 },
  input: { backgroundColor: "#fff", borderRadius: 4, padding: 8, marginHorizontal: 12, marginTop: 4 },
  lista: { flex: 1, marginTop: 8, backgroundColor: "#F08080" },
  nomeItem: { paddingVertical: 6, paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: "#00000022" },
});

const landscapeStyles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  titleBar: { padding: 12, alignItems: "center", backgroundColor: "#FFFFE0" },
  titleText: { fontWeight: "bold" },
  label: { color: "#000", marginTop: 8, marginHorizontal: 12 },
  input: { backgroundColor: "#fff", borderRadius: 4, padding: 8, marginHorizontal: 12, marginTop: 4 },
  lista: { flex: 1, marginTop: 8, backgroundColor: "#EEE8AA" },
  nomeItem: { paddingVertical: 6, paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: "#00000022" },
});

export default Cinco;