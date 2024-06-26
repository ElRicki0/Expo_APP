import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DashBoard from '../screens/DashBoard';
import Codigo from '../screens/Codigo';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Oculta el header
                tabBarActiveTintColor: '#AF8260', // Color de los íconos activos
                tabBarInactiveTintColor: '#B99873', // Color de los íconos inactivos
                tabBarStyle: { backgroundColor: '#FFF', height: 60, borderTopWidth: 0 }, // Estilo de la barra de pestañas
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                
                    if (route.name === 'DashBoard') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Codigo') {
                        iconName = focused ? 'code' : 'code-outline'; // Cambié 'home' por 'code' para representar la pantalla de Codigo
                    }
                
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                
            })}

        >
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
                options={{ title: 'Inicio' }}
            />
            <Tab.Screen
                name="Codigo"
                component={Codigo}
                options={{ title: 'Inicio' }}
            />

        </Tab.Navigator>
    );
};

export default TabNavigator;
