import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import CustomCardMoreScreen from '../screens/CustomCardMoreScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
                <Stack.Screen name="CustomCardMoreScreen" component={CustomCardMoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
