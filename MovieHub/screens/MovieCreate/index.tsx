import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const MovieCreate: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Novo Filme
        </Text>
        <Text style={styles.text}>
          Adicione um novo filme à sua coleção.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieCreate;
