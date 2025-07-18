import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';


const places = [
    {
        img: require('../assets/img/plavce/image.png'),
        title: "Coochiemudlo Island",
        description: "A small island off Brisbane with white beaches, nature trails and barbecue areas. A place to escape the hustle and bustle of the city and relax in the silence of nature.",
        coordinates: { latitude: -27.5729, longitude: 153.3311 },
    },
    {
        img: require('../assets/img/plavce/1c63df6e3a6eebd85c96159d52a26ef4a219f08d.png'),
        title: "South Bank Parklands",
        description: "South Bank Parklands is the cultural heart of Brisbane, located on the south bank of the river. Here you will find picturesque gardens, walking paths, numerous cafes and restaurants. A highlight is Streets Beach - an artificial urban lagoon with a sandy beach, where you can relax on a hot day. The park is also the venue for numerous festivals and events throughout the year.",
        coordinates: { latitude: -27.4811, longitude: 153.0234 },
    },
    {
        img: require('../assets/img/plavce/06f2196b056d5d40839bd1160ed974bc38726fa0.png'),
        title: "Lone Pine Koala Sanctuary",
        description: "It is the world's oldest and largest koala sanctuary, home to over 70 species of Australian animals. Visitors can cuddle koalas, feed kangaroos, watch platypuses and take part in daily shows such as sheepdog performances and wild lorikeet feedings. The sanctuary also offers amenities such as free Wi-Fi, parent rooms and a café.",
        coordinates: { latitude: -27.5266, longitude: 152.9757 },
    },
    {
        img: require('../assets/img/plavce/88b7e63c00a87d24b6026d6299efa04cac70c3f9.png'),
        title: "Mount Coot-tha Lookout",
        description: "Mount Coot-tha is Brisbane's highest point, offering panoramic views of the city. There is a café, restaurant and gift shop at the top. Nearby are the botanical gardens, a planetarium and numerous walking and cycling trails, making this a perfect place for a nature holiday.",
        coordinates: { latitude: -27.4698, longitude: 152.9730 },
    },
    {
        img: require('../assets/img/plavce/0679d890b8833654ff1107a5f34431621e0908cf.png'),
        title: "Queensland Museum",
        description: "The Queensland Museum offers exhibits on the history, science and culture of the region. Here you can see interactive exhibitions, dinosaur skeletons, marine life exhibits and much more. The museum is part of the Queensland Cultural Centre, which also includes art galleries and libraries.",
        coordinates: { latitude: -27.4729, longitude: 153.0180 },
    },
    {
        img: require('../assets/img/plavce/b5ef4ac80fc657eb9453602fec1e67764c02646b.png'),
        title: "Kangaroo Point Cliffs",
        description: "Kangaroo Point Rocks are a popular spot for rock climbing, picnicking and walking. They offer breathtaking views of the Brisbane River and the city centre. The rocks are formed from volcanic rock, giving them a unique look. They are an ideal place for outdoor activities and photography.",
        coordinates: { latitude: -27.4739, longitude: 153.0345 },
    },
    {
        img: require('../assets/img/plavce/b7dc8c821b030fd79a786cd831c1c427761b27cf.png'),
        title: "Shrine of Remembrance (ANZAC Square)",
        description: "The Shrine of Remembrance in ANZAC Square is a memorial dedicated to Australian soldiers who died in wars. The central element is the Eternal Flame, symbolizing eternal memory. Every year, ceremonies are held here to commemorate ANZAC Day and other memorable dates. The memorial has great historical and cultural significance for the city.",
        coordinates: { latitude: -27.4653, longitude: 153.0260 },
    },
    {
        img: require('../assets/img/plavce/c693421d9a890857b68929e4c5f41101b56104b6.png'),
        title: "City Botanic Gardens",
        description: "Brisbane City Botanic Gardens is an oasis of calm in the heart of the city. The gardens offer a variety of plants, including tropical and subtropical species, as well as scenic walking paths. It is the perfect place to relax, picnic and observe nature.",
        coordinates: { latitude: -27.4766, longitude: 153.0303 },
    }
];

export default function AllPlacesScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>— Popular place —</Text>



            {places.map((place, index) => (
                <TouchableOpacity onPress={()=>{navigation.navigate('PopularPlaceCard', {place})}} style={styles.recommendationCard}>
                    <Image
                        source={place.img}
                        style={styles.image}
                    />
                    <View style={styles.recommendationInfo}>
                        <Text style={styles.recommendationTitle}>{place.title}</Text>
                        <Text style={styles.stars}>★★★★★</Text>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Open all</Text>
                            <Image source={require('../assets/img/famicons_open-outline.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            <View style={{marginBottom: 200}}/>

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
