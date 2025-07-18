import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import {facts} from "./InterestingAboutBrisbane";


export default function FactsByCategory({ route }) {
    const [index, setIndex] = useState(0);
    const {cat} = route.params;
    const factList = facts[cat];

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${factList[index]}`,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const nextFact = () => {
        setIndex((prev) => (prev + 1) % factList.length);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Interesting about Brisbane</Text>
            <Text style={styles.subheader}>Choose category: {cat}</Text>
            <View style={styles.card}>
                <Text style={styles.fact}>{factList[index]}</Text>

                <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
                    <Text style={styles.icon}>🔗</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextBtn} onPress={nextFact}>
                    <Text style={styles.nextText}>Next ➜</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {     flex: 1,
        backgroundColor: '#000',
        padding: 16,  alignItems: "center", },
    header: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    subheader: { color: '#bbb', fontSize: 16, marginBottom: 20 },
    card: {
        backgroundColor: '#1a1a1a',
        borderRadius: 14,
        padding: 20,
        minHeight: 250,
        justifyContent: 'center',
        position: 'relative',
    },
    fact: { color: '#fff', fontSize: 16, marginBottom: 20 },
    shareBtn: {
        position: 'absolute',
        bottom: 70,
        alignSelf: 'center',
    },
    icon: { fontSize: 26 },
    nextBtn: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        alignSelf: 'center',
    },
    nextText: { fontWeight: 'bold', fontSize: 16 },
});
