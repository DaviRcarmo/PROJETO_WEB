import React from "react";
import {
  SafeAreaView,
  Text,
  View
} from "react-native";
import styles from "./styles";

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Meu Perfil
        </Text>
        <Text style={styles.text}>
          Informações e preferências do usuário.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
