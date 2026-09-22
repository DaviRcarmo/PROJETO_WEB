import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Genres: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Gêneros
        </Text>
        <Text style={styles.text}>
          Filmes agrupados por gênero.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Genres;
