import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PHOTOS = Array.from({ length: 25 }).map(
    (item, index) => `https://unsplash.it/300/300/?random&__id=${index}`
)

const ExploreScreen = () => {
    const PHOTOS = Array.from({ length: 24 }).map(
        (_, i) => `https://unsplash.it/300/300/?random&__id=${route.key}${i}`
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.grid}>
                {PHOTOS.map((uri) => (
                    <View key={uri} style={styles.item}>
                        <Image source={{ uri }} style={styles.photo} />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 4
    },
    item: {
        width: '100%',
        height: 150,
    }
})

export default ExploreScreen
