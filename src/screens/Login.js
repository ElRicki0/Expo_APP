import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Boton from '../components/Boton';
import BotonNavigation from '../components/BotonNavigation';
import DashBoard from './DashBoard';
import * as Font from 'expo-font';

export default function Login({ navigation }) {
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

    const DashBoardScreen = async () => {
        navigation.navigate('TabNavigator');
    }

    const CodigoScreen = async()=>{
        navigation.navigate('Codigo')
    }

    return (
        <View style={styles.container}>
            <Image source={require('./../img/logo.png')} />
            <Text style={styles.title}>QUIROPRACTICA ESPECÍFICA</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo Electronico"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={CodigoScreen}>
                <Text style={styles.forgotPassword}>
                    Olvidaste tu contraseña?
                </Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>

            </View>

            <BotonNavigation
                textoBoton='Aceptar'
                accionBoton={DashBoardScreen}
            />

            <Boton
                textoBoton='No tengo una cuenta.'
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