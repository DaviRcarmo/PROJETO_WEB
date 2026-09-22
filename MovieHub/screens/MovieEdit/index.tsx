import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const MovieEdit: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Editar Filme
        </Text>
        <Text style={styles.text}>
          Altere as informações do filme.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieEdit;
