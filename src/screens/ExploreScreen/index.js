import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PHOTOS = Array.from({ length: 20 }).map(
    (item, index) => `https://unsplash.it/300/300/?random&__id=${index}`
)

const ExploreScreen = () => {
    const PHOTOS = Array.from({ length: 24 }).map(
        (_, i) => `https://unsplash.it/300/300/?random&__id=${i}`
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
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: '48%',
        margin: '1%',
        aspectRatio: 1,
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default ExploreScreen
