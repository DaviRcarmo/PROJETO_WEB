import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Statistics: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Estatísticas
        </Text>
        <Text style={styles.text}>
          Resumo geral da sua coleção de filmes.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;
