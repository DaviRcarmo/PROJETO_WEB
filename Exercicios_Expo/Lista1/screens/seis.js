import {useState} from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';

const TextInputUsuario = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const nomeLabel = " Nome ";
    const idadeLabel = " Idade ";

    const [salvar, setSalvar] = useState("");
    const onPress = () => setSalvar( text + " - " + number);

  return (
    <View style={styles.container}>
        <Text style={styles.nomeContainer}>{nomeLabel}</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />

        <Text style={styles.idadeContainer}>{idadeLabel}</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <View style={styles.salvarContainer}>
            <Text style={styles.buttonText}>{salvar}</Text>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#00aeff',
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },

    buttonText: {
        color: 'white',
    },

    salvarContainer: {
        padding: 10,
    },

    nomeContainer: {
        marginBottom: 2,
        color: 'white',
    },

    idadeContainer: {
        marginBottom: 2,
        color: 'white',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#2b2b2b',
    },
});

export default TextInputUsuario;