import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert, Linking, ScrollView} from 'react-native';
import Share from 'react-native-share';
import { useDispatch } from 'react-redux';
import {savePlace} from "../redux/slices/saveSlice";


export default function PopularPlaceCard({route}) {
    const {place} = route.params;
    const dispatch = useDispatch();

    const handleShare = async () => {
        try {
            await Share.open({
                title: place.title,
                message: `${place.title}\n\n${place.description}\n\nLocation: ${place.coordinates.latitude}, ${place.coordinates.longitude}`,
            });
        } catch (error) {
            console.error('Share error:', error);
        }
    };

    const handleOpenMap = () => {
        const url = `https://www.google.com/maps?q=${place.coordinates.latitude},${place.coordinates.longitude}`;
        Linking.openURL(url).catch(() => Alert.alert('Error', 'Cannot open map'));
    };

    const handleSave = () => {
        // console.log(place);
        dispatch(savePlace(place));
        Alert.alert('Saved', 'Place has been saved!');
    };

    return (
        <ScrollView style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.heading}>Popular place</Text>
            <Image source={place.img} style={styles.image} />
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.stars}>⭐️⭐️⭐️⭐️⭐️</Text>
            <Text style={styles.coords}>
                {place.coordinates.latitude}, {place.coordinates.longitude}
            </Text>
            <Text style={styles.description}>{place.description}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={handleOpenMap}>
                    <Text>Open on map</Text>
                    <Image source={require('../assets/img/famicons_open-outline.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleSave}>
                    <Text>Save</Text>
                    <Image source={require('../assets/img/qwffff.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={handleShare}>
                    <Text>Share</Text>
                    <Image source={require('../assets/img/hugeicons_share-01.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    card: {
        backgroundColor: '#191919',
        borderRadius: 12,
        padding: 16,
        // marginTop: 106,
        margin: 16,
    },
    heading: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'center',
    },
    image: {
        height: 180,
        width: '100%',
        borderRadius: 8,
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    stars: {
        fontSize: 16,
        color: '#FFD700',
    },
    coords: {
        fontSize: 14,
        color: '#bbb',
        marginVertical: 4,
    },
    description: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',alignItems: 'center',gap: 4,
        borderRadius: 8,
    },
});
