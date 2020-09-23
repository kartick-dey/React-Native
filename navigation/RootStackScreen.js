import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerNode="none" screenOptions={{
        headerStyle: {
            backgroundColor: "#009387",
        },
        headerShown: false
    }}>
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    </RootStack.Navigator>
);
export default RootStackScreen;