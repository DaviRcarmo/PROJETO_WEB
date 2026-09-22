import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Gallery: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Galeria
        </Text>
        <Text style={styles.text}>
          Selecione uma imagem da galeria ou câmera.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Gallery;
