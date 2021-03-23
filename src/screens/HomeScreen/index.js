import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { showMessage } from "react-native-flash-message";

const HomeScreen = () => {
    return (
        <View>
            <Text>Home Page</Text>
            <Button mode="contained" onPress={() => {
                showMessage({
                    message: "Flash Message",
                    type: "info"
                })
            }}>Flash Message</Button>
        </View>
    )
}

export default HomeScreen
