import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Button, Image } from 'react-native';
import Boton from '../components/Boton';

export default function App({ navigation }) {

    const LoginScreen = async () => {
        navigation.navigate('Login');
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imgContainer} source={require('./../img/logo.png')} />

                <View style={styles.inputContainer}>
                    <Text style={styles.titleInputs}>Nombre</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>Apellido</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>DUI</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>Fecha de nacimiento</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>Teléfono</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>Correo Electronico</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.titleInputs}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        title="Aceptar"
                        color="#216608"
                    />
                </View>

                <Boton
                    textoBoton='Ya tengo una cuenta.'
                    accionBoton={LoginScreen}
                />

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    titleInputs: {
        marginLeft: 6,
        marginBottom: 5,
        color: 'white',
        fontSize: 16,
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        borderColor: 'white',
        borderWidth: 0.7,
        borderRadius: 10,
        backgroundColor: '#8A8A8A',
        color: 'white',
        paddingHorizontal: 25,
        marginBottom: 10,
        height: 40,
    },

    buttonContainer: {
        marginTop: 12,
        width: '40%',
    },

    button: {
        color: 'white',
    },

    imgContainer: {
        maxHeight: 180,
    },
});