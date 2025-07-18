import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {removePlace} from "../redux/slices/saveSlice";

export default function SavedItemsScreen({ navigation }) {
    const places = useSelector((state) => state.savedPlaces);
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>— Saved places —</Text>

            {places.length === 0 ? (
                <Text style={styles.emptyText}>You have no saved places yet.</Text>
            ) : (
                places.map((place, index) => (
                    <View key={place.id || index} style={styles.recommendationCard}>
                        <Image source={place.img} style={styles.image} />
                        <View style={styles.recommendationInfo}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.recommendationTitle}>{place.title}</Text>
                                <TouchableOpacity onPress={() => dispatch(removePlace(place))}>
                                    <Image source={require('../assets/img/si_close-duotone.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.stars}>★★★★★</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PopularPlaceCard', { place })} style={styles.button}>
                                <Text style={styles.buttonText}>Open all</Text>
                                <Image source={require('../assets/img/famicons_open-outline.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            )}



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    emptyText: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 40,
    },
    header: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#111',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 20,
    },
    hand: {
        fontSize: 32,
        marginRight: 12,
    },
    cardText: {
        color: 'white',
        fontSize: 16,
        flex: 1,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    recommendationCard: {
        backgroundColor: '#111',
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 20,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 12,
    },
    recommendationInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    recommendationTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    stars: {
        color: 'gold',
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 6,
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600',
    },
    icon: {
        fontSize: 14,
    },
    mapCard: {
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 30,
    },
    mapImage: {
        width: '100%',
        height: 180,
    },
    buttonOverlay: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
});
