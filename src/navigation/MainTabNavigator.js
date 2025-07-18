import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useSelector} from 'react-redux';
import AllPlacesScreen from "../screens/AllPlacesScreen";
import MapScreen from "../screens/MapScreen";
import SavedItemsScreen from "../screens/SavedItemsScreen";
import InterestingAboutBrisbane from "../screens/InterestingAboutBrisbane";

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'Home':
            return require('../assets/img/ep_place.png');
        case 'AllPlacesScreen':
            return require('../assets/img/proicons_info.png');
        case 'MapScreen':
            return require('../assets/img/solar_map-linear.png');
        case 'SavedItemsScreen':
            return require('../assets/img/tabler_bookmarkf.png');
        case 'InterestingAboutBrisbane':
            return require('../assets/img/entypo_hand.png');
    }
};

const MainTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: '#0F0F0F',
                    // shadowColor: '#1F2021',
                    height: 150,
                },
                headerTitleStyle: {
                    color: 'white',
                    fontFamily: 'Quantico-BoldItalic',
                    fontSize: 40,
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 30,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#000',
                    height: 80,
                    paddingTop: 20,
                    borderRadius: 20,
                    borderColor: '#383838',
                    borderWidth: 2,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 10,
                },
                tabBarIcon: () => (
                    <Image
                        source={getTabIcon(route.name)}
                        style={{ width: 40, height: 40 }}
                    />
                ),
                headerTitle: () => (
                    <Image
                        source={require('../assets/img/f4941ef3eeeae756d7e3bd58ec50b5661e5bdca3.png')}
                        style={{ width: 200, height: 200, resizeMode: 'contain' }}
                    />
                ),

            })}
        >

        <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="AllPlacesScreen"
                component={AllPlacesScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="SavedItemsScreen"
                component={SavedItemsScreen}
                options={{
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="InterestingAboutBrisbane"
                component={InterestingAboutBrisbane}
                options={{
                    tabBarLabel: '',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
