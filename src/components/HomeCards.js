import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeCards = ({ navigate }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.grid}>
            <Card style={styles.card} onPress={() => navigation.navigate("AuthRoutes")}>
                <Text>Auth Screen</Text>
            </Card>
            <Card style={styles.card}>
                <Text>Buat Nanti Lagi</Text>
            </Card>
            <Card style={styles.card}>
                <Text>Buat Nanti Lagi</Text>
            </Card>
            <Card style={styles.card}>
                <Text>Buat Nanti Lagi</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        width: '48%',
        margin: '1%',
        aspectRatio: 2,
    }
})

export default HomeCards
