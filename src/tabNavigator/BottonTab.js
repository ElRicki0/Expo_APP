import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import DashBoard from '../screens/DashBoard';

const Tab = createBottomTabNavigator();

export default function BottonTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Dashboard"
                component={DashBoard}
                options={{
                    title: 'Inicio',
                    tabBarActiveTintColor: '#3b4cca',
                    headerStyle: {
                        backgroundColor: '#3b4cca',
                    },
                    headerTintColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="menu" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator >
    )

}