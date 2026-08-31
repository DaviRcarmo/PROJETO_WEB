import React from "react";
import { ScrollView, Text, View, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useCep } from "../hooks/useCep";

const Consultas = () => {
  const { consultas } = useCep();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {consultas.map((c, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.texto}>Logradouro: {c.logradouro}</Text>
            <Text style={styles.texto}>Localidade: {c.localidade}</Text>
            <Text style={styles.texto}>UF: {c.uf}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#222" },
  scroll: { paddingHorizontal: 16 },
  item: { borderBottomWidth: 1, borderBottomColor: "#444", paddingVertical: 8 },
  texto: { color: "#fff" },
});

export default Consultas;