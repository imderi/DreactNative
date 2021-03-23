import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { showMessage } from "react-native-flash-message";

const HomeScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <Text>Home Screen</Text>
            <Button mode="contained" onPress={() => {
                showMessage({
                    message: "Flash Message",
                    type: "info"
                })
            }}>Flash Message</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 4
    }
})

export default HomeScreen
