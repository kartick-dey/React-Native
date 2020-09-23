import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

// Imports HomeStackScreens

import Categories from './HomeStackScreens/Categories';
import Explore from './HomeStackScreens/Explore';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    const [search, setSearch] = useState(null);
    const [isSearch, setIsSearch] = useState(false);
    const handleSearchValue = () => {
        setSearch(search)
    };
    const onOpenSearch = () => {
        setIsSearch(true);
    }
    const onSearch = () => {
        setIsSearch(false)
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Category of Fish Market" component={Categories}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    )
                }}></HomeStack.Screen>
            <HomeStack.Screen name="Explore" component={Explore}
                options={{ 
                    title: isSearch ? null :'Market Place',
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        // alignSelf: 'center',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerRight: () => (
                        isSearch ?
                            <Animatable.View animation="fadeIn" style={styles.searchBoxContainer}>
                                <TextInput placeholder="Search a Location..."
                                    onChangeText={() => handleSearchValue()}
                                    style={styles.searchBox}></TextInput>
                                    <TouchableOpacity onPress={() => onSearch()}>
                                    <FontAwesome style={styles.searchIcon} name="search" size={20} color="#43BFC7"></FontAwesome>
                                    </TouchableOpacity>
                            </Animatable.View> : <TouchableOpacity onPress={()=> onOpenSearch()}>
                                <FontAwesome name="search" size={20} style={{ marginRight: 20 }}></FontAwesome>
                            </TouchableOpacity>
                    )
                }}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    searchBoxContainer: {
        margin: 5,
        height: 35,
        flexDirection: 'row',
        padding: 2,
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 50,
    },
    searchBox: {
        padding: 0,
        margin: 0,
        width: 300,
        height: 30,
        fontSize: 15,
        marginLeft: 10,
        // backgroundColor: 'red'
    },
    searchIcon: {
        marginRight: 15

    }
});

export default HomeStackScreen;

// onPress = {() => { navigation.navigate('Cart') }}