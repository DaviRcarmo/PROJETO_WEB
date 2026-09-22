import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          MovieHub
        </Text>
        <Text style={styles.text}>
          Olá! Aqui estão seus filmes em destaque.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
