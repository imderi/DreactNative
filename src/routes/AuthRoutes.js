import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import SignInScreen from '../screens/AuthScreen/SignInScreen';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';
import ResetPasswordScreen from '../screens/AuthScreen/ResetPasswordScreen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ResetPasswordScreen} />
        </Stack.Navigator>
    )
}

export default AuthRoutes
