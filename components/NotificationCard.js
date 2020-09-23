import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Title, Caption, Paragraph, Avatar } from 'react-native-paper';

const NotificationCard = (props) => {
    return (
        <View style={styles.notificationContainer}>
            <View style={styles.content}>
                <View style={styles.contentImage}>
                    <Avatar.Image style={styles.profilePic} source={require('../assets/profilePic.jpeg')} size={80}></Avatar.Image>
                    <FontAwesome style={styles.icon} name={props.icon} size={22} color='#43BFC7'></FontAwesome>
                    {/* <FontAwesome style={styles.icon} name="address-book-o" size={22} color='black'></FontAwesome> */}
                </View>
                <View style={styles.contentDetails}>
                    <View style={{ flexDirection: 'row' }}>
                        <Paragraph style={styles.username}>{props.name}</Paragraph>
                        <Paragraph>{props.subject}</Paragraph>
                    </View>
                    <Paragraph style={{ fontWeight: 'bold' }}>Center: <Caption>Maa kali Aqurium Center</Caption></Paragraph>
                    <Caption>{props.posted}</Caption>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    notificationContainer: {
        height: 100,
        margin: 5,
        marginRight: 5,
        width: '98%',
        elevation: 2,
        backgroundColor: 'white',
        // padding: 10,
        borderRadius: 10
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // padding: 10,
    },
    contentImage: {
        width: '30%',
        // backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        position: 'relative'
    },
    icon: {
        marginTop: -20,
        marginRight: -60
        // position: 'absolute'
    },
    contentDetails: {
        width: '70%',
        marginTop: 15,
        // backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 3
    }
});
export default NotificationCard;
