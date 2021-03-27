import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// PAGES
import SignInScreen from '../screens/AuthScreen/SignInScreen';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthScreen/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
}

export default AuthRoutes
