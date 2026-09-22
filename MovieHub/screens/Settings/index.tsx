import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Settings: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Configurações
        </Text>
        <Text style={styles.text}>
          Ajustes e preferências do aplicativo.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
