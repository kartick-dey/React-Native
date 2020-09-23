import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'

import PostedCard from '../../components/PostedCard';

const ViewProfileScreen = ({ navigation }) => {
    const myPosts = useSelector(state => state.posts.myPosts);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.profileImageSection}>
                    <Image style={styles.profilePic} source={require('../../assets/profilePic.jpeg')}></Image>
                </View>
                <View style={styles.userInfoSection}>
                    <View style={styles.userInfo}>
                        <Text style={styles.username}>Kartick Dey</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Icon style={styles.userInfoIcon} name="map-marker-radius" size={15}></Icon>
                        <Text style={styles.userInfoDetails}>Bankura(WB)</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <FontAwesome style={styles.userInfoIcon} name="phone" size={15}></FontAwesome>
                        <Text style={styles.userInfoDetails}> 8170990726</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Icon style={styles.userInfoIcon} name="email" size={16}></Icon>
                        <Text style={styles.userInfoDetails}>kartick@gmail.com</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Icon style={styles.userInfoIcon} name="home-outline" size={16}></Icon>
                        <Text style={styles.userInfoDetails}>Maa Kali Fishery</Text>
                    </View>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Followers</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Following</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={{ padding: 5, marginLeft: 20, fontSize: 18, backgroundColor: '#f0f3f5' }}>Previous Posts</Text>
            <View style={styles.bottom}>
                <FlatList
                    keyExtractor={(item, index) => item.name}
                    data={myPosts}
                    renderItem={({ item }) => <PostedCard></PostedCard>}></FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43BFC7',
        padding: 5,
        flexDirection: 'row',
    },
    profileImageSection: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    profilePic: {
        padding: 0,
        margin: 0,
        width: 130,
        height: 130,
        borderRadius: 65
    },
    userInfoSection: {
        // backgroundColor: '#292929',
        flex: 1,
        marginLeft: 20,
        alignItems: 'flex-start',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    userInfo: {
        flexDirection: 'row',
        // padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    username: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.85)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    userInfoIcon: {
        padding: 5,
        color: '#ccc'
    },
    userInfoDetails: {
        padding: 5,
        color: '#e8eded'
    },
    center: {
        height: '5%',
        backgroundColor: '#12868a',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    centerItem: {
        width: '50%',
        height: '100%',
    },
    centerItemInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: '#292929'
    },
    actionButton: {
        marginBottom: 0,
        // marginTop: 8,
        width: '100%',
        height: '100%',
        borderRightWidth: 2,
        borderRightColor: '#43BFC7',
        // backgroundColor: '#43BFC7',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 25
    },
    actionButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    bottom: {
        flex: 1,
        padding: 5,
        backgroundColor: '#f7f9fa'
    }
});

export default ViewProfileScreen;