import React from "react";
import {
SafeAreaView,
Text,
View
} from "react-native";
import styles from "./styles";
const Favorites: React.FC = () => {
    export default function Splash() {
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.title}>
            Meus Favoritos
            </Text>
            <Text style={styles.text}>
            Filmes favoritos serão exibidos aqui.
            </Text>
            </View>
            </SafeAreaView>
        );
    };
};
