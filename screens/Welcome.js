import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';

import LinarGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor='#43D4FF' barStyle='dark-content'></StatusBar>
            <LinarGradient colors={['#43D4FF', '#43BFC7', '#43BFC7']} style={{ flex: 1 }}>
                <View style={styles.welcomeContainer}>
                    <View>
                        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.title}>Aquarium</Text>
                        <Text style={styles.subTitle}>India's No.1 Fish Bazar</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => { navigation.replace("LoginScreen") }}>
                            <LinarGradient
                                colors={['#43BFC7', '#43BFC7']}
                                style={styles.getStarted}>
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons name="navigate-next" color="#fff" size={20}></MaterialIcons>
                            </LinarGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinarGradient>
        </>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    welcomeContainer: {
        marginTop: 100,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#05375a'
    },
    subTitle: {
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    getStarted: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default WelcomeScreen;