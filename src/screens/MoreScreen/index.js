import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';

const MoreScreen = () => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <Text>Gimme feedback! prreasee!</Text>
            <Image source={require('../../images/meme.png')} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default MoreScreen
