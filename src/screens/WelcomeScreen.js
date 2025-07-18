import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const slides = [
    {
        title: 'Welcome to Brisbane Trails Now',
        img: require('../assets/img/f4941ef3eeeae756d7e3bd58ec50b5661e5bdca3.png'),
        description: "Explore Brisbane's best spots, from cozy parks to historic landmarks, all in one convenient app.",
        button: 'Good day!',
    },
    {
        title: 'Find places on the map',
        img: require('../assets/img/et_map.png'),
        description: 'Click on pins on the map to open short descriptions of places and plan your walks around the city.',
        button: 'Okey, continue',
    },
    {
        title: 'Your favorite places at your fingertips',
        img: require('../assets/img/tabler_bookmark.png'),
        description: 'Add places to your favorites to quickly return to them at any time.',
        button: 'Great! Start',
    },
];

export default function WelcomeScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.replace('MainTab');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                scrollEnabled={false}
                contentOffset={{ x: currentIndex * width, y: 0 }}
                showsHorizontalScrollIndicator={false}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={slide.img} style={{width: 200, height:200, marginBottom: 40}} resizeMode='center' />
                        <Text style={styles.title}>{slide.title}</Text>
                        <Text style={styles.description}>{slide.description}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.buttonText}>{slide.button}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    description: {
        color: '#ccc',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 12,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
