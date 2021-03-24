import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TheCarousel from '../../components/TheCarousel'

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <TheCarousel />
            <Button onPress={() => navigate('SignIn')} >
                Login Screen
            </Button>
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
