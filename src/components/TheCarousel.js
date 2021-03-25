import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Platform,
    Image
} from 'react-native';

const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    }
];
const { width: screenWidth } = Dimensions.get('window');

const TheCarousel = props => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef();

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.illustration
                        }}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    }
});

export default TheCarousel;