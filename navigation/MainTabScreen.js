import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Import Tab Screens

import Home from '../screens/Home';
import AddPost from '../screens/AddPost';
import Notification from '../screens/Notification';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = ({ navigation }) => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: "#43BFC7",
            inactiveTintColor: "#838485",
            labelStyle: {
                fontSize: 12,
                margin: 0,
                padding: 0,
            },
            tabStyle: {
                paddingVertical: 5
            },
            safeAreaInsets: {
                bottom: 5
            }
        }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={27} />
                ),
            }}
        />
        <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
                tabBarLabel: 'View Cart',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="shopping-cart" color={color} size={25} />
                ),
            }}
        />
        <Tab.Screen
            name="Add Post"
            component={AddPost}
            options={{
                tabBarLabel: 'Add Post',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="add-a-photo" color={color} size={25}></Icon>
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={Notification}
            options={{
                tabBarLabel: 'Notification',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="add-alert" color={color} size={26}></Icon>
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="face" color={color} size={26}></Icon>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;