import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import MapScreen from '../Screens/MapScreen';


const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} defaultScreenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='MapScreen' component={MapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
