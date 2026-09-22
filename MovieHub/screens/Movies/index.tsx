import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Movies: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Filmes
        </Text>
        <Text style={styles.text}>
          Todos os filmes cadastrados serão exibidos aqui.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Movies;
