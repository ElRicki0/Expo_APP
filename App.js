import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login.js';
import RegisterScreen from './src/screens/Registro.js';
import DashBoardScreen from './src/screens/DashBoard.js';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'

                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registro" component={RegisterScreen} />
                <Stack.Screen name="DashBoard" component={DashBoardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}