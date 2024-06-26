import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Modal, Button } from 'react-native';
// import ButtonTab from '../tabNavigator/BottonTab';
import data from '../data/DashBoarddata';
import data2 from '../data/DashBoarddata2';

export default function DashBoard({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [selectedItem2, setSelectedItem2] = useState(null);



    const openModal2 = (item) => {
        setSelectedItem2(item);
        setModalVisible2(true);
    };

    const closeModal2 = () => {
        setModalVisible2(false);
    };
    const cerrarYabrir = () => {
        setModalVisible(false);
        setModalVisible2(true);

    }


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
                //Contenedor para tarjeta de servicios como modal
                <View style={styles.MainContainer}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.subTitle}>Servicios</Text>
                        <FlatList
                            data={informacion2}
                            horizontal={true}
                            renderItem={({ item }) => (
                                 //redirigir hacia modal de servicios
                                <TouchableOpacity onPress={() => openModal(item)}>
                                <View style={styles.cards}>
                                    //redirigir hacia modal de servicios
                                    <Image source={item.src} style={styles.image} />
                                    <Text style={styles.normalText}>{item.title}</Text>
                                </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                //Contenedor para tarjeta de citas como modal
                        <View style={styles.cardContainer}>
                            <Text style={styles.subTitle}>Citas</Text>
                            <FlatList
                                data={informacion}
                                horizontal={true}
                                renderItem={({ item }) => (
                                 //redirigir hacia modal de citas
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
            //modal de servicios su descripcion para realizar cita
                        <Modal
                            visible={modalVisible}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={() => {
                                setModalServicio(false);
                            }}
                        >
                        <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    {selectedItem && (
                                        <>
                                            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                                            <Image source={selectedItem.src} style={styles.modalImage} />
                                            <View style={styles.modalHorizontal} >
                                                <Text style={styles.modalText}>El tratamiento más común es la manipulación que el quiropráctico hace con la mano. Consiste en mover 
                                                    una articulación de la columna vertebral hasta el máximo de su rango, seguido de una compresión ligera. Esto con frecuencia se 
                                                    llama "ajuste". Esto realinea los huesos de la columna vertebral para situarlos en una mejor posición. </Text>
                                                <Text style={styles.modalText}>Beneficios</Text>
                                                <Text style={styles.modalText}>Tratamiento de problemas de salud que afectan los nervios, músculos, huesos y articulaciones: 
                                                    La quiropráctica es una forma de atención médica que trata problemas.</Text>
                                            </View>
                                            <Button title="Realizar cita" onPress={cerrarYabrir} color="#216608" />
                                        </>
                                    )}
                                </View>
                            </View>
                        </Modal>


                        //modal de cita aqui aparece la informacion de cita a realizar con fecha y hora
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
                                    {selectedItem && (
                                        <>
                                            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                                            <Image source={selectedItem.src} style={styles.modalImage} />
                                            <View style={styles.modalHorizontal} >
                                                <Text style={styles.modalText}>Seleccione Fecha:   </Text>
                                                <Text style={styles.modalText}>20/20/20</Text>
                                            </View>
                                            <View style={styles.modalHorizontal} >
                                                <Text style={styles.modalText}>   Seleccione Hora:    </Text>
                                                <Text style={styles.modalText}>5:00   pm</Text>
                                            </View>

                                            <Button title="Realizar cita" onPress={cerrarYabrir} color="#216608" />
                                        </>
                                    )}
                                </View>
                            </View>
                        </Modal>
                        //modal de cita aqui aparece la informacion de la cita creada con exito
                        <Modal
                            visible={modalVisible2}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={() => {
                                setModalVisible(false);
                            }}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    {selectedItem && (
                                        <>
                                            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                                            <Image source={selectedItem.src} style={styles.modalImage} />
                                            <View style={styles.modalHorizontal} >
                                                <Text style={styles.modalText}>Fecha:   </Text>
                                                <Text style={styles.modalText}>20/20/20</Text>
                                            </View>
                                            <View style={styles.modalHorizontal} >
                                                <Text style={styles.modalText}>   Hora:    </Text>
                                                <Text style={styles.modalText}>5:00   pm</Text>
                                            </View>

                                            <Button title="Cita realizada" onPress={closeModal2} color="#216608" />
                                        </>
                                    )}
                                </View>
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

    
    modalHorizontal: {
        flexDirection: 'row', // Establece la dirección en horizontal
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15
    },
    modalText: {
        color: 'white',
        marginBottom: 10
    },
    modalInformation: {
        color: 'white',
        backgroundColor: '67F335',
        padding: 15,
    },
    modalImage: {
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        width: 150,
        height: 150
    }
    ,
    modalButton: {
        Color: '#216608',
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