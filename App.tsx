import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert, Linking, ScrollView} from 'react-native';

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import PopularPlaceCard from "./src/screens/PopularPlaceCasd";
import FactsByCategory from "./src/screens/FactsByCategory";

const Stack = createStackNavigator();

export default function App({}) {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={({ navigation }) => ({
                            headerStyle: {
                                backgroundColor: '#000000',
                                height: 180,
                            },
                            headerShadowVisible: false,
                            headerTitle: () => (
                                <Image
                                    source={require('./src/assets/img/f4941ef3eeeae756d7e3bd58ec50b5661e5bdca3.png')}
                                    style={{ width: 200, height: 200, resizeMode: 'contain' }}
                                />
                            ),
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Image
                                        style={{ marginLeft: 16, width: 24, height: 24 }}
                                        source={require('./src/assets/img/weui_arrow-outlined.png')}
                                    />
                                </TouchableOpacity>
                            ),
                        })}
                    >
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="PopularPlaceCard" component={PopularPlaceCard} options={{}} />
                        <Stack.Screen name="FactsByCategory" component={FactsByCategory} options={{}} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
