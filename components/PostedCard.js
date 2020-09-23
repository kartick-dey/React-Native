import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PostedCard = () => {
    return (
        <View style={styles.postedCardContainer}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/fish.jpeg')}></Image>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Type</Paragraph>
                            <Text style={styles.sectionCaption}>Dimpona</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Name</Paragraph>
                            <Text style={styles.sectionCaption}>Katla</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Export Date</Paragraph>
                            <Text style={styles.sectionCaption}>09/07/2020 at 9AM</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Transport</Paragraph>
                            <Text style={styles.sectionCaption}>Condition Applicable</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Rate</Paragraph>
                            <Text style={styles.sectionCaption}>Rs. 100/packet</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <View style={styles.infoItemInner}>
                            <Paragraph style={styles.sectionParagraph}>Location</Paragraph>
                            <Text style={styles.sectionCaption}>Bankur(WB)</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottonContainer}>
                <TouchableOpacity style={styles.rePostBotton}>
                    <Icon name="autorenew" size={18} color='#43BFC7'></Icon>
                    <Text style={styles.rePostBottonLabel}>Re-Post</Text>
                </TouchableOpacity>
                <View style={styles.verticalLine}></View>
                <TouchableOpacity style={styles.deleteBotton}>
                    <Icon name="delete" size={18} color='red'></Icon>
                    <Text style={styles.deleteBottonLabel}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postedCardContainer: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        height: 210,
        shadowColor: '#fcfeff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 3
    },
    content: {
        backgroundColor: '#ccc',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 160,
        marginBottom: 0,
        // padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderColor: '#eceff1'
    },
    imageContainer: {
        width: '50%',
        paddingLeft: 10,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 150
    },
    infoContainer: {
        paddingLeft: 15,
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 0,
        marginBottom: 0
    },
    infoItem: {
        width: '50%',
        paddingTop: 0,
        padding: 10,
        height: 50
    },
    infoItemInner: {
        flex: 1
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
    bottonContainer: {
        // paddingTop: 10,
        // paddingBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 40,
    },
    verticalLine: {
        borderColor: '#eceff1',
        borderWidth: 1,
    },
    rePostBotton: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRightWidth: 1,
        // borderColor: '#ccc'
    },
    deleteBotton: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBottonLabel: {
        fontSize: 18,
        paddingLeft: 5,
        color: 'red',
        fontWeight: 'bold'
    },
    rePostBottonLabel: {
        fontSize: 18,
        paddingLeft: 5,
        color: '#43BFC7',
        fontWeight: 'bold'
    }
});

export default PostedCard;