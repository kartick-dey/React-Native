import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Title,
    Caption,
    Paragraph,
    Avatar
} from 'react-native-paper';

const Card = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.userInfo}>
                    <Avatar.Image source={require('../assets/profilePic.jpeg')} size={60}></Avatar.Image>
                    <View style={{ marginLeft: 15, flexDirection: 'column',}}>
                        <TouchableOpacity><Text style={styles.title}>{props.name}</Text></TouchableOpacity>
                        <Paragraph>Center: <Caption>Maa kali Aqurium Center</Caption></Paragraph>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Caption>Posted: {props.posted}</Caption>
                            <FontAwesome name='circle' size={8} style={{color: '#ccc',paddingLeft: 5}}></FontAwesome>
                            <TouchableOpacity><Text style={styles.follow}>Follow</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.centerImage}>
                <Image style={styles.fishImage} source={props.image}></Image>
            </View>
            <View style={styles.centerDeatils}>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Type</Paragraph>
                        <Text style={styles.sectionCaption}>Dimpona</Text>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Name</Paragraph>
                        <Text style={styles.sectionCaption}>Katla</Text>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Export Date</Paragraph>
                        <Text style={styles.sectionCaption}>09/07/2020 at 9AM</Text>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Transport</Paragraph>
                        <Text style={styles.sectionCaption}>Condition Applicable</Text>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Rate</Paragraph>
                        <Text style={styles.sectionCaption}>Rs. 100/packet</Text>
                    </View>
                </View>
                <View style={styles.centerItem}>
                    <View style={styles.centerItemInner}>
                        <Paragraph style={styles.sectionParagraph}>Location</Paragraph>
                        <Text style={styles.sectionCaption}>Bankur(WB)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome name="cart-plus" color="#fff" size={16}>  Add to Cart</FontAwesome>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <TouchableOpacity style={styles.button}>
                            <FontAwesome name="phone" color="#fff" size={16}>  Contact Now</FontAwesome>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 450,
        margin: 5,
        marginRight: 5,
        width: '98%',
        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    horizontalLine: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 2
    },
    top: {
        flex: 1,
        height: '10%',
        // width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
        // backgroundColor: '#ccc'
    },
    title: {
        // backgroundColor: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Roboto-Light',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        margin: 0,
        padding: 0
    },
    follow: { 
        paddingLeft: 5, 
        color: '#43BFC7', 
        fontWeight: 'bold', 
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    followIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginRight: 20
    },
    centerImage: {
        paddingTop: 5,
        paddingBottom: 5,
        height: '50%',
        width: '100%',
        // backgroundColor: 'green'
    },
    fishImage: {
        width: 383,
        height: 200
    },
    centerDeatils: {
        // marginTop: 5,
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // elevation: 3,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        height: '22%',
        // backgroundColor: '#7fbcac',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#ccc'
    },
    centerItem: {
        marginTop: 0,
        paddingTop: 0,
        width: '33%',
        padding: 5,
        height: 40
    },
    centerItemInner: {
        flex: 1,
        // backgroundColor: '#ccc'
    },
    sectionParagraph: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#9d9e9d',
        fontFamily: 'Roboto-Light'
    },
    sectionCaption: {
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'Roboto-Light'
    },
    bottom: {
        height: '11%',
        // backgroundColor: 'gray',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,

    },
    bottomItem: {
        width: '50%',
        height: '100%',
        padding: 5
    },
    bottomItemInner: {
        flex: 1,
        // backgroundColor: '#292929'
    },
    button: {
        elevation: 1,
        backgroundColor: '#43BFC7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 5,
        color: '#fff'
    }
});

export default Card;