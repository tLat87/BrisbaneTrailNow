import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

const place =
    {
        img: require('../assets/img/244c8b1cec9e065e53be7aa8eb9a63e249e73832.png'),
        title: "Eat Street Northshore",
        description:"Description: A giant open-air food market with dozens of food stalls from all over the world. The atmosphere is complemented by live music and a beautiful view of the river.\n",
        coordinates: { latitude: -27.4350, longitude: 153.0800 },
    }


export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>— HOME —</Text>

            <View style={styles.card}>
                <Image  source={require('../assets/img/entypo_hand.png')}/>
                <Text style={styles.cardText}>Hi! Choose what to explore in Brisbane today</Text>
            </View>

            <Text style={styles.sectionTitle}>Recommended</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('PopularPlaceCard', {place})}} style={styles.recommendationCard}>
                <Image
                    source={require('../assets/img/244c8b1cec9e065e53be7aa8eb9a63e249e73832.png')}
                    style={styles.image}
                />
                <View style={styles.recommendationInfo}>
                    <Text style={styles.recommendationTitle}>Eat Street Northshore</Text>
                    <Text style={styles.stars}>★★★★★</Text>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Open all</Text>
                       <Image source={require('../assets/img/famicons_open-outline.png')}/>
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Map with place</Text>
            <View style={styles.mapCard}>
                <Image
                    source={require('../assets/img/b14f2deeee440a5a5f58105878470d7c751c71ec.png')}
                    style={styles.mapImage}
                />
                <TouchableOpacity style={styles.buttonOverlay} onPress={()=>{navigation.navigate('MapScreen')}}>
                    <Text style={styles.buttonText}>Open full</Text>
                    <Image source={require('../assets/img/famicons_open-outline.png')}/>
                </TouchableOpacity>
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
