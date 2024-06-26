import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Modal, Button } from 'react-native';
// import ButtonTab from '../tabNavigator/BottonTab';
import servicio1 from '../data/dataservicio';

const datoservicio = servicio1;

const LoginScreen = async () => {
    navigation.navigate('Login');
};

<View style={styles.MainContainer}>

    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('./../img/dashboard/ejemplo(1).jpg')}
                style={styles.profileImage}
            />
        </View>
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Ajuste Quiropráctico</Text>
                <Text style={styles.text}>Servicio de scoliosis</Text>
            </View>

            return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>Servicios</Text>
            <FlatList
                data={datoservicio}
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} onPress={navigateToServicio}>
                        <Image source={item.src} style={styles.image} />
                        <Text style={styles.normalText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );


            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.forgotPasswordContainer} onPress={CitaScreen}>
                <Text style={styles.forgotPassword}>
                    Realizar cita
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>

</View>
