import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Trailer: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Trailer
        </Text>
        <Text style={styles.text}>
          Assista ao trailer do filme.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Trailer;
