import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const locations = [
    {
        title: 'Mount Coot-tha Lookout',
        description: 'Brisbane\'s highest point with panoramic city views, café, gardens, and trails.',
        latitude: -27.4698,
        longitude: 152.9730,
    },
    {
        title: 'Queensland Museum',
        description: 'Exhibits on history, science, and culture. Part of the Cultural Centre.',
        latitude: -27.4729,
        longitude: 153.0180,
    },
    {
        title: 'Kangaroo Point Cliffs',
        description: 'Cliffs for rock climbing, walking, and views of the Brisbane River.',
        latitude: -27.4739,
        longitude: 153.0345,
    },
    {
        title: 'Shrine of Remembrance (ANZAC Square)',
        description: 'War memorial with Eternal Flame, honoring fallen soldiers.',
        latitude: -27.4653,
        longitude: 153.0260,
    },
    {
        title: 'City Botanic Gardens',
        description: 'Gardens with tropical plants and walking paths in central Brisbane.',
        latitude: -27.4766,
        longitude: 153.0303,
    },
    {
        title: 'Open-Air Food Market',
        description: 'Food stalls from around the world, live music, and riverside views.',
        latitude: -27.4350,
        longitude: 153.0800,
    },
];

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -27.4698,
                    longitude: 153.0260,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                {locations.map((loc, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: loc.latitude,
                            longitude: loc.longitude,
                        }}
                        title={loc.title}
                    >
                        <Callout>
                            <View style={styles.callout}>
                                <View style={styles.calloutText}>
                                    <Text style={styles.title}>{loc.title}</Text>
                                    <Text>{loc.description}</Text>
                                </View>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    callout: {
        width: 250,
        padding: 8,
    },
    calloutText: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
});
