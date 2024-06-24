import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Modal, Button } from 'react-native';
import Boton from '../components/Boton';
import data from '../data/DashBoarddata';
import data2 from '../data/DashBoarddata2';

export default function App({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const informacion = data;
    const informacion2 = data2;

    const LoginScreen = async () => {
        navigation.navigate('Login');
    };


    return (
        <ScrollView style={styles.body}>
            <View style={styles.container}>
                <Image style={styles.imgContainer} source={require('./../img/logo.png')} />
                <Text style={styles.title}>QUIROPRÁCTICA ESPECÍFICA</Text>

                <View style={styles.MainContainer}>

                    <View style={styles.cardContainer}>
                        <Text style={styles.subTitle}>Citas</Text>
                        <FlatList
                            data={informacion}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => openModal(item)}>
                                    <View style={styles.cards}>
                                        <Image source={item.src} style={styles.image} />
                                        <Text style={styles.normalText}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.subTitle}>Servicios</Text>
                        <FlatList
                            data={informacion2}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.cards}>
                                    <Image source={item.src} style={styles.image} />
                                    <Text style={styles.normalText}>{item.title}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                        <Modal
                            visible={modalVisible}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={() => {
                                setModalVisible(false);
                            }}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Text style={styles.subTitle}>Hola Mundo</Text>
                                </View>
                                <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                            </View>
                        </Modal>



                    </View>
                </View>




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

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
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
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Thin',
        textAlign: 'center',
        color: 'white',
        marginBottom: 40,
    },
    subTitle: {
        fontSize: 22,
        textAlign: 'center',
        color: '#216608',
        marginBottom: 4,
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
    cards: {
        backgroundColor: '#0000',

        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        borderRadius: 8,
        borderWidth: 1,
        width: 330,
        height: 200,
        marginBottom: 10,
    },
    normalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});