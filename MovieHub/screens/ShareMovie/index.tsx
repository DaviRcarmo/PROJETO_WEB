import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const ShareMovie: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Compartilhar Filme
        </Text>
        <Text style={styles.text}>
          Compartilhe este filme com seus amigos.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ShareMovie;
