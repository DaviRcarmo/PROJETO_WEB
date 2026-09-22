import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Register: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Criar Conta
        </Text>
        <Text style={styles.text}>
          Preencha os dados abaixo.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
