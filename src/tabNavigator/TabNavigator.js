import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashBoard from '../screens/DashBoard';
import Perfil from '../screens/Perfil';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Oculta el header
                tabBarActiveTintColor: '#32CF0C', // Color de los íconos activos
                tabBarInactiveTintColor: '#47A330', // Color de los íconos inactivos
                tabBarStyle: { backgroundColor: '#575757', height: 60, borderTopWidth: 0 }, // Establece el color gris de fondo y altura de la barra de pestañas
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'DashBoard') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'menu' : 'menu-outline'; // Cambié 'home' por 'code' para representar la pantalla de Codigo
                    }

                    return <Ionicons name={iconName} size={size} color={'#FFFFFF'} />; // Establece el color blanco para los íconos
                },
            })}
        >
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color="#000000" />
                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'menu' : 'menu-outline'} size={size} color="#000000" />
                    ),
                }}
            />


        </Tab.Navigator>
    );
};

export default TabNavigator;
