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
        <ScrollView style={styles.body}>
            <View style={styles.container}>
                <Image style={styles.imgContainer} source={require('./../img/logo.png')} />

                <View style={styles.MainContainer}>

                    <View style={styles.cardContainer}>

                    </View>
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
    body: {
        backgroundColor: 'black',
    },
    cardContainer: {
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    titleInputs: {
        marginLeft: 6,
        marginBottom: 5,
        color: 'white',
        fontSize: 16,
    },

    MainContainer: {
        width: '100%',
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