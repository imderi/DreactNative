import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// PAGES
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

// NAVIGATOR TYPES
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu Routes" component={MenuRoutes} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MenuRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-home";

                        if (route.name === "Home Routes") {

                        } else if (route.name === "Explore Routes") {
                            iconName = "ios-exit"
                        } else if (route.name === "Settings Routes") {
                            iconName = "ios-settings"
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    }
                })
            }
        >
            <Tab.Screen name="Home Routes" component={DashboardRoutes} />
            <Tab.Screen name="Explore Routes" component={ExploreRoutes} />
            <Tab.Screen name="Settings Routes" component={SettingsRoutes} />
        </Tab.Navigator>
    )
}

const DashboardRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const ExploreRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Explore" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const SettingsRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default Routes;
