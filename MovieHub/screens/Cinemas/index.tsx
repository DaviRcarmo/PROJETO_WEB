import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Cinemas: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Cinemas Próximos
        </Text>
        <Text style={styles.text}>
          Encontre cinemas na sua região.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Cinemas;
