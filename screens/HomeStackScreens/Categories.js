import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    Title,
    Caption,
    Paragraph,
    Avatar
} from 'react-native-paper';

const Categories = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Select Your Order</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.Item}>
                    <TouchableOpacity style={styles.ItemInner}
                        onPress={() => navigation.navigate('Explore')}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/fish-spawn.jpg')}></Image>
                        </View>
                        <Paragraph style={styles.sectionParagraph}>Fish Spawn</Paragraph>
                        <Text style={styles.sectionCaption}>235 Items</Text>
                        <FontAwesome name="long-arrow-right" size={16} style={styles.enterIcon}> View</FontAwesome>
                    </TouchableOpacity>
                </View>
                <View style={styles.Item}>
                    <TouchableOpacity style={styles.ItemInner}
                        onPress={() => navigation.navigate('Explore')}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/fish.png')}></Image>
                        </View>
                        <Paragraph style={styles.sectionParagraph}>Fish Seed</Paragraph>
                        <Text style={styles.sectionCaption}>532 Items</Text>
                        <FontAwesome name="long-arrow-right" size={16} style={styles.enterIcon}> View</FontAwesome>
                    </TouchableOpacity>
                </View>
                <View style={styles.Item}>
                    <TouchableOpacity style={styles.ItemInner}
                        onPress={() => navigation.navigate('Explore')}>
                        <View>
                            <Image style={styles.image} source={require('../../assets/fish-seed.jpeg')}></Image>
                        </View>
                        <Paragraph style={styles.sectionParagraph}>Fish</Paragraph>
                        <Text style={styles.sectionCaption}>623 Items</Text>
                        <FontAwesome name="long-arrow-right" size={16} style={styles.enterIcon}> View</FontAwesome>
                    </TouchableOpacity>
                </View>
                <View style={styles.Item}>
                    <TouchableOpacity style={styles.ItemInner}
                        onPress={() => navigation.navigate('Explore')}>
                        <View style={styles.imageContanier}>
                            <Image style={styles.image} source={require('../../assets/aquarium-fish.jpg')}></Image>
                        </View>
                        <Paragraph style={styles.sectionParagraph}>Aquarium Fish</Paragraph>
                        <Text style={styles.sectionCaption}>225 Items</Text>
                        <FontAwesome name="long-arrow-right" size={16} style={styles.enterIcon}> View</FontAwesome>
                    </TouchableOpacity>                    
                </View>
            </View>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleContainer: {
        marginTop: 50,
        height: '5%',
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Galada-Regular'
    },
    content: {
        height: '55%',
        backgroundColor: '#ffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,

    },
    Item: {
        width: '50%',
        height: '70%',
        padding: 5,
    },
    ItemInner: {
        flex: 1,
        elevation: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f1ed'
    },
    imageContanier: {
        // flex: 1
        width: 150,
        height: 100,
        borderRadius: 100,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 80,
    },
    sectionParagraph: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    enterIcon: {
        marginTop: 10,
        backgroundColor: '#43BFC7',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 50
    }
});

export default Categories;