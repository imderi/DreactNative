import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// SCREENS
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MoreScreen from '../screens/MoreScreen';

// OTHER ROUTES

// NAVIGATOR
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-home";

                        if (route.name === "Home") {

                        } else if (route.name === "Explore") {
                            iconName = "ios-compass"
                        } else if (route.name === "More") {
                            iconName = "ios-ellipsis-horizontal-circle"
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    }
                })
            }
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    )
}
export default TabRoutes
