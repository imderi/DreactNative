import React from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
        >
            <View style={{ width: screenWidth - 60, height: 100, backgroundColor: "black" }}>
                <Text> Halo</Text>
            </View>
            <View style={{ width: screenWidth - 100, height: 100, backgroundColor: "red" }}>
                <Text> Halo</Text>
            </View>
            <View style={{ width: screenWidth - 60, height: 100, backgroundColor: "green" }}>
                <Text> Halo</Text>
            </View>
        </ScrollView>
    )
}

export default Carousel
