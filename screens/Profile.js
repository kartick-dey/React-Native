import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ViewProfileScreen from './ProfileStackScreens/ViewProfileScreen';
import EditProfileScreen from './ProfileStackScreens/EditProfileScreen';

const ProfileStack = createStackNavigator()

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ViewProfileScreen}
                options={{
                    title: 'Profile Information',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium',
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Edit Profile')}>
                            <Icon name="account-edit" size={18} color="white"></Icon>
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>
                        
                    )
                }}></ProfileStack.Screen>
            <ProfileStack.Screen name="Edit Profile" component={EditProfileScreen}
                options={{
                    headerTitleAlign: {
                        alignSelf: 'center'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        // alignSelf: 'center',
                        fontFamily: 'GrenzeGotisch-Medium'
                    }
                }}></ProfileStack.Screen>
        </ProfileStack.Navigator>
    );
};

const styles = StyleSheet.create({
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        backgroundColor: '#43BFC7',
        padding: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
    },
    editButtonText: {
        paddingLeft: 5,
        fontSize: 18,
        color: 'white'
    },
});


export default ProfileStackScreen;