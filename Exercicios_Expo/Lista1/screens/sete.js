import { useState } from 'react';
import {StyleSheet, TextInput, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const emailLabel = " E-mail ";
    const senhaLabel = " Senha ";

    const [logar, setLogar] = useState('');
    const onPress = () => setLogar(text + " - " + number);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.emailContainer}>{emailLabel}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
            />

            <Text style={styles.senhaContainer}>{senhaLabel}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                secureTextEntry={true}
                maxLength={8}
            />

            <View style={styles.containerBotoes}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.logarContainer}>
                <Text style={styles.botaoResultado}> {logar}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#2b2b2b',
    },

    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },


    emailContainer: {
        marginBottom: 2,
        color: 'white',
    },

    senhaContainer: {
        marginBottom: 2,
        color: 'white',
    },

    text: {
        fontSize: 25,
        fontWeight: '500',
    },

    button: {
        backgroundColor: '#ffd600',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginHorizontal: 5,
    },

    buttonText: {
        color: '#333',
        textAlign: 'center',
    },

    containerBotoes: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16,
    },

    botaoResultado: {
        color: 'white',
    },
});

export default App;