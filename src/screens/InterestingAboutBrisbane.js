
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const facts = {
    "History and culture": [
        `Meanjin – the original name of the city. Before colonization, the area of modern Brisbane was known as Meanjin among the Turbal and Yugara peoples, meaning "point-like place" – due to the shape of the land surrounded by the river.`,
        `Brisbane is one of the sunniest cities in the world. The city enjoys an average of 283 days of sunshine per year, making it an ideal place for outdoor enthusiasts.`,
        `Brisbane River – "brown snake". Locals jokingly call the Brisbane River "brown snake" due to its curved shape and the color of its water.`,
        `Brisbane is the third most populous city in Australia. The city is home to over 2.8 million people, second only to Sydney and Melbourne.`,
        `The city with the largest municipality in the country. Brisbane covers an area of over 1,340 km².`,
    ],
    "Architecture and landmarks": [
        `The largest city hall in Australia. Brisbane City Hall, built in 1930, is an architectural gem.`,
        `Story Bridge with a unique history. The bridge was designed with a curve to avoid demolishing a beloved pub.`,
        `Pages of history on Queen Street. The corner of Queen and Albert Streets was once a convict barracks.`,
        `Number of bridges across the Brisbane River. There are 15, including the iconic Story Bridge.`,
        `Queensland's first skyscraper. Torbreck, built in 1960, was the first residential high-rise.`,
    ],
    "Nature and recreation": [
        `Roma Street Parkland. The largest tropical garden in the city, loved for its biodiversity.`,
        `South Bank Parklands. Includes Streets Beach, the Ferris wheel, and the Nepalese Peace Pagoda.`,
        `The first cultivated macadamia nut. Planted in 1858 in the Botanic Gardens – still alive today.`,
        `Kangaroo Point Cliffs. Over 230 million years old, now a favorite for climbers.`,
        `The city that wakes up early. Fitbit ranked Brisbane #1 for earliest risers.`,
    ],
    "Events and traditions": [
        `Ekka is the main event of the year. The agricultural show draws ~400,000 visitors annually.`,
        `Battle of Brisbane. A 1942 clash between Australian and American troops.`,
        `Riverfire Festival. An annual fireworks and airshow spectacle along the Brisbane River.`,
        `Brisbane in the movies. Filming location for Thor: Ragnarok and The Railway Man.`,
        `Unusual heritage – the toilet. Nundah Air Raid Shelter, now a heritage-listed public restroom.`,
    ]
};


const categories = [
    'History and culture',
    'Architecture and landmarks',
    'Nature and recreation',
    'Events and traditions',
];

export default function InterestingAboutBrisbane({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>— Interesting about Brisbane —</Text>
        <Text style={styles.subheader}>Choose category</Text>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            onPress={() => navigation.navigate('FactsByCategory', { cat })}
            style={styles.item}
          >
            <Text style={styles.itemText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {     flex: 1,
        backgroundColor: '#000',
        padding: 16,  alignItems: "center",},
    header: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    subheader: { color: '#bbb', fontSize: 16, marginBottom: 20 },
    item: {
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
    },
    itemText: { color: '#fff', fontSize: 16 },
});
