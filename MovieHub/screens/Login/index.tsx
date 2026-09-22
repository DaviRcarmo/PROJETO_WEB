import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Login: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          MovieHub
        </Text>
        <Text style={styles.text}>
          Faça login para continuar.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
