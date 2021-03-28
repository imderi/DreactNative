import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeCards = () => {
    const navigation = useNavigation();

    const cardData = [
        { title: "Auth Screen", content: "🔐", navigate: "AuthRoutes" },
        { title: "I need ideas", content: "🤔" },
        { title: "I need ideas", content: "🤔" },
        { title: "I need ideas", content: "🤔" },
    ]

    return (
        <View style={styles.grid} >
            {
                cardData.map((item, index) => (
                    <Card style={styles.card} key={index} onPress={() => { item.navigate ? navigation.navigate(item.navigate) : console.log("Need ideas") }}>
                        {/* <Card.Title title={item.title} /> */}
                        <Card.Content style={styles.style}>
                            <Text style={{ fontSize: 35 }}>{item.content}</Text>
                            <Text style={{ fontSize: 21, fontWeight: '500', paddingTop: 10 }}>{item.title}</Text>
                        </Card.Content>
                        {/* <Card.Actions>
                            <Button>This is Button</Button>
                        </Card.Actions> */}
                    </Card>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        paddingTop: 10,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        borderRadius: 15,
        width: '48%',
        margin: '1%',
        aspectRatio: 1.5,
    },
    style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeCards
