import { useState, } from 'react';
import {StyleSheet, Switch, TextInput, Text, TouchableOpacity, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.moldura}>
                <Image
                    style={styles.Logo}
                    source={{
                    uri: 'https://leonardo-energy.org.br/wp-content/uploads/2017/07/LOGO-ETEC.jpg',
                    }}
                />

                <Text style={styles.titulo}>HOME</Text>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>UM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>DOIS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>TRÊS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>QUATRO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CINCO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SEIS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SETE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>OITO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>NOVE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>DEZ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#7c7c7c',
    },

    moldura: {
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#a5a4a4",
        width: '90%',
        maxWidth: 270,
        padding: 10,
        paddingTop: 20,
        paddingBottom: 15,
    },

    Logo: {
        alignSelf: "center",
        height: 140,
        width: 240,
        marginBottom: 20,
    },

    titulo: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#ffd600',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginHorizontal: 5,
        width: 110,
        height: 50,
        marginBottom: 10,
    },

    buttonText: {
        color: '#333',
        textAlign: 'center',
    },

    botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    },
});

export default App;