import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Search: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Pesquisar
        </Text>
        <Text style={styles.text}>
          Pesquise filmes por título, gênero ou diretor.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
