import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Boton = ({textoBoton, accionBoton}) => {
    return ( 
<TouchableOpacity onPress={accionBoton} style={styles.button}>
        <Text style={styles.buttonText}>{textoBoton}</Text>
    </TouchableOpacity>
     );
}
 
export default Boton;

const styles = StyleSheet.create({
    button: {
        textAlign: 'end',
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5,
        marginVertical:5
    },
    buttonText: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: 'white',
    },
});