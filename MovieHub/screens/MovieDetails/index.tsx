import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const MovieDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Detalhes do Filme
        </Text>
        <Text style={styles.text}>
          Informações completas do filme.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;
