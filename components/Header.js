import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.header}>
            <FontAwesome name="bars" color="black" size={25} style={styles.leftIcon}></FontAwesome>
            <View>
                <Text style={styles.headerText}>Fishery</Text>
            </View>
            <FontAwesome name="cart-plus" color="black" size={30} style={styles.rightIcon}></FontAwesome>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopColor: '#ccc',
        // backgroundColor: '#ccc',
        borderBottomColor: '#ccc',
        // borderWidth: 1,
        elevation: 1
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        letterSpacing: 1,
        fontFamily: 'Galada-Regular'
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
        backgroundColor: 'white'
    },
    leftIcon: {
        position: 'absolute',
        left: 20
    }
});

export default Header;