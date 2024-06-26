import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Codigo() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('./../img/perfil.png')}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Nombre: Sofia Elena</Text>
                    <Text style={styles.text}>Apellido: Garcia Pineda</Text>
                    <Text style={styles.text}>DUI: 12345678-9</Text>
                    <Text style={styles.text}>Edad: 34    Teléfono: 66558822</Text>
                    <Text style={styles.text}>Correo: Soff_garP@gmail.com</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
    },

    backButton: {
        position: 'absolute',
        left: 10,
        top: 10,
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    contentContainer: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'left',
        marginTop: 20,
        padding: 20,
    },

    text: {
        color: 'darkgrey',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 65,
    },

    textContainer: {
        marginTop: 30,
    },

    buttonContainer: {
        marginTop: 40,
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#216608',
        marginTop: 15,
        width: 200,
        paddingVertical: 10,
        borderRadius: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});