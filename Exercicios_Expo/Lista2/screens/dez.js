import { useState, } from 'react';
import {StyleSheet, Switch, TextInput, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import  { Picker }  from  '@react-native-picker/picker' ;

const App = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
    const [number2, onChangeNumber2] = useState('');
    const emailLabel = " E-mail ";
    const senhaLabel = " Senha ";
    const CsenhaLabel = " Confirmação da senha ";

    const [escolhaSelecionada, setescolhaSelecionada] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [logar, setLogar] = useState('');
    const onPress = () =>
        setLogar(text + " - " + number + " - " + number2 + " - " + escolhaSelecionada + " - " + (isEnabled ? "Sim" : "Não"));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.moldura}>
                <Text style={styles.titulo}>CADASTRO</Text>
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

                <Text style={styles.senhaContainer}>{CsenhaLabel}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber2}
                    value={number2}
                    keyboardType="numeric"
                    secureTextEntry={true}
                    maxLength={8}
                />

                <Text style={styles.senhaContainer}>{CsenhaLabel}</Text>
                <Picker style={styles.escolhaContainer}
                        selectedValue = { escolhaSelecionada } 
                        onValueChange = { ( itemValue, itemIndex )  => 
                            setescolhaSelecionada( itemValue ) 
                        } > 
                        < Picker.Item  label = "Gestor"  value = "admin"  /> 
                        < Picker.Item  label = "Administrador"  value = "manager"  />
                        < Picker.Item  label = "Usuário"  value = "user"  /> 
                </Picker>

                <View style={styles.switchContainer}>
                    <Text style={styles.senhaContainer}>Manter-se conectado</Text>
                    <Switch
                        trackColor={{false: "#e77878", true: "#94df83"}}
                        thumbColor={isEnabled ? "#47eb22" : "#ed1111"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}

                    />
                </View>

                <View style={styles.containerBotoes}>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Logar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.logarContainer}>
                    <Text style={styles.botaoResultado}> {logar}</Text>
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
        fontSize: 16,
    },

    senhaContainer: {
        marginBottom: 2,
        color: 'white',
        fontSize: 16,
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
        marginBottom: 5,
    },

    logarContainer: {
        alignItems: "center",
        marginTop: 5,
    },

    botaoResultado: {
        color: 'white',
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

    titulo: {
        color: '#d4e000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    escolhaContainer: {
        height: 50,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
    },

    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
});

export default App;