import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Filters: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Filtros
        </Text>
        <Text style={styles.text}>
          Filtre filmes por diferentes critérios.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Filters;
