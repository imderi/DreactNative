import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TheCarousel from '../../components/TheCarousel'

// Components
import HomeCards from '../../components/HomeCards'

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <TheCarousel />
            <HomeCards navigation={navigate} />
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
