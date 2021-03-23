import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Pages
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SettingsPage from '../screens/SettingsPage'

// Navigator Types
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Routes" component={HomeRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const HomeRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-home";

                        if (route.name === "Home") {

                        } else if (route.name === "Explore") {
                            iconName = "ios-enter"
                        } else if (route.name === "Add") {
                            iconName = "ios-enter"
                        } else if (route.name === "Reward") {
                            iconName = "ios-exit"
                        } else if (route.name === "Settings") {
                            iconName = "ios-settings"
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    }
                })
            }
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Explore" component={LoginScreen} />
            <Tab.Screen name="Add" component={LoginScreen} />
            <Tab.Screen name="Reward" component={LoginScreen} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    )
}

// const SettingsRoutes = () => {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="Login" component={LoginScreen} />
//         </Drawer.Navigator>
//     )
// }

export default Routes;
