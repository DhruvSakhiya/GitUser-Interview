import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/homeScreen';
import BookMarkUsersScreen from '../screens/bookMarkUsersScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../theme/colors'
import { W } from '../theme'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false,tabBarLabelStyle:{fontSize:W(14)} }} defaultScreenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Tab.Screen name='Home' component={HomeScreen} options={{title:'Users',tabBarIcon:({focused, color, size})=>
                   <FontAwesome name='users' size={20} color={focused?colors.primary:colors.black}/>}} />
                <Tab.Screen name='BookMarkScreen' component={BookMarkUsersScreen} options={{title:'Bookmarks',tabBarIcon:({focused, color, size})=>
                   <FontAwesome name='bookmark' size={20} color={focused?colors.primary:colors.black}/>}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
