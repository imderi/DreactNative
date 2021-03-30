import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

// SCREENS
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

// OTHER ROUTES
import AuthRoutes from './AuthRoutes';
import TabRoutes from './TabRoutes'

// NAVIGATOR
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainRoutes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Menu Routes"
                    component={TabRoutes}
                    options={({ navigation: { navigate } }) => ({
                        title: "Dreact",
                        headerTitleAlign: "left",
                        headerRight: () => (
                            <View style={{ flexDirection: "row" }}>
                                <IconButton size={26} icon="magnify" onPress={() => navigate("Search")} />
                                <IconButton size={26} icon="account-circle" onPress={() => navigate("Account")} />
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                        headerTitleAlign: "left",
                        headerBackTitleVisible: false,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        headerTitleAlign: "left",
                        headerBackTitleVisible: false,
                        headerBackImage: () => (<IconButton icon="close" />),
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                    }}
                />
                {/* ROUTES FOR AUTHENTICATION */}
                <Stack.Screen
                    name="AuthRoutes"
                    component={AuthRoutes}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoutes;
