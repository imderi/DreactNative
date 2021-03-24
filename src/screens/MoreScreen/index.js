import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';

const MoreScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.center}>
                <Image source={require('../../../assets/images/meme.png')} />
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
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MoreScreen
