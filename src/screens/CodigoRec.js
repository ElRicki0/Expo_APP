import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Boton from '../components/Boton';
import BotonNavigation from '../components/BotonNavigation';
import * as Font from 'expo-font';

export default function CodigoRec({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts();
        }
    });

    const loadFonts = async () => {
        await Font.loadAsync({
            'Poppins-Thin': require('./../Fonts/Poppins-Thin.ttf'),
        });

        setFontsLoaded(true);
    }

    if (!fontsLoaded) {
        return (<View />);
    }

    const LoginScreen = async () => {
        navigation.navigate('Login');
    };

    const RegistroScreen = async () => {
        navigation.navigate('Registro');
    }

    return (
        <View style={styles.container}>
            <Image source={require('./../img/logo.png')} />
            <Text style={styles.title}>Ingrese Codigo</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Validar codigo"
                    placeholderTextColor="white"
                />
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>
                    Volver enviar contraseña 
                </Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>

            </View>

            <BotonNavigation
                textoBoton='Aceptar'
                accionBoton={RegistroScreen}
            />

            <Boton
                textoBoton='Regresar.'
                accionBoton={LoginScreen}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Thin',
        textAlign: 'center',
        color: 'white',
        marginBottom: 40,
    },

    inputContainer: {
        width: '80%',
    },

    input: {
        height: 40,
        borderRadius: 40,
        backgroundColor: '#216608',
        color: 'white',
        paddingHorizontal: 25,
        marginBottom: 15,
        height: 50,
    },

    forgotPasswordContainer: {
        width: '80%',
        alignSelf: 'flex-start',
    },

    forgotPassword: {
        color: 'white',
        textAlign: 'left',
        marginLeft: 50,
    },

    buttonContainer: {
        marginTop: 40,
        width: '40%',
    },

    button: {
        color: 'white',
    },
});