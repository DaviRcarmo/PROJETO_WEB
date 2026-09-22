import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const MovieDelete: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Excluir Filme
        </Text>
        <Text style={styles.text}>
          Esta ação não pode ser desfeita.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieDelete;
