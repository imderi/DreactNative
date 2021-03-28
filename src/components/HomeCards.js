import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeCards = () => {
    const navigation = useNavigation();

    const cardData = [
        { title: "Auth Screen", content: "content", navigate: "AuthRoutes" },
        { title: "Auth Screen 2", content: "content", navigate: "AuthRoutes" },
        { title: "Auth Screen 3", content: "content", navigate: "AuthRoutes" },
        { title: "Auth Screen 4", content: "content", navigate: "AuthRoutes" },
    ]

    return (
        <View style={styles.grid}>
            {
                cardData.map((item) => (
                    <Card style={styles.card} onPress={() => navigation.navigate(item.navigate)}>
                        <Card.Title title={item.title} />
                        <Card.Content>
                            <Text>{item.content}</Text>
                        </Card.Content>
                        <Card.Actions>
                            {/* <Button>View</Button> */}
                        </Card.Actions>
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
        aspectRatio: 2,
    }
})

export default HomeCards
