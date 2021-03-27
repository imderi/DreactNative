import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TheCarousel from '../../components/TheCarousel'

const HomeItem = () => {
    return (
        <View>
            <Text>Home Item</Text>
        </View>
    )
}

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <TheCarousel />
            <Button onPress={() => navigate('AuthRoutes')} >
                Login Screen
            </Button>
            <HomeItem />
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
