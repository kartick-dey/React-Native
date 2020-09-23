import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, TextInput, StatusBar, ScrollView } from 'react-native';

import LinarGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../components/context';

const LoginScreen = ({ navigation }) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { signIn } = React.useContext(AuthContext);
    const textInputChange = (value) => {
        if (value.length !== 0) {
            setData({
                ...data,
                email: value,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: value,
                check_textInputChange: false
            })
        }
    };
    const handlePaswordChange = (value) => {
        setData({
            ...data,
            password: value
        })
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    };
    return (
        <>
            <StatusBar backgroundColor='#ccc' barStyle='dark-content'></StatusBar>
            <View style={styles.container}>
                <LinarGradient colors={['#ccc', '#43D4FF', '#43BFC7', '#43BFC7']} style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <View style={styles.imageContainer}>
                            <Animatable.Image
                                animation="bounceIn"
                                duraton="150"
                                source={require('../assets/loginAvater.png')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </View>
                        <Text style={styles.textHeader}>Get in touch !</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}>
                        <Text style={styles.textfooter}>Email / Phone</Text>
                        <View style={styles.action}>
                            <FontAwesome name="user-o" color="#05375a" size={20}></FontAwesome>
                            <TextInput
                                placeholder="Enter your email"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(value) => textInputChange(value)}></TextInput>
                            <Animatable.View
                                animation="bounceIn">
                                {data.check_textInputChange ?
                                    <Feather name="check-circle" color='green' size={20}></Feather>
                                    : null}
                            </Animatable.View>
                        </View>
                        <Text style={[styles.textfooter, { marginTop: 10 }]}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome name="lock" color="#05375a" size={25}></FontAwesome>
                            <TextInput
                                placeholder="Enter your password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                onChangeText={(value) => handlePaswordChange(value)}></TextInput>
                            <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                                {data.secureTextEntry ?
                                    <Feather name="eye-off" color='gray' size={20}></Feather>
                                    :
                                    <Feather name="eye" color='gray' size={20}></Feather>
                                }
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('SignUpScreen') }}>
                            <Text style={{ fontSize: 18, paddingTop: 20 }}>Forget Password?</Text>
                        </TouchableOpacity>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={() => { signIn() }}>
                                <LinarGradient
                                    colors={['#43BFC7', '#43BFC7']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, { color: '#fff', fontSize: 22 }]}>Log In</Text>
                                </LinarGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.signIn, {
                                    // borderColor: '#38ABFD',
                                    // borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={() => { navigation.navigate('SignupScreen') }}>
                                <Text>Create an account</Text>
                                <Text style={[styles.textSign, { color: '#43BFC7', fontSize: 22 }]}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinarGradient>
            </View>
        </>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    footer: {
        flex: 4,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    textfooter: {
        color: '#05375a',
        fontSize: 18
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 70,
        backgroundColor: '#ccc'
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 50
    },
    title: {
        color: '#05375a',
        fontSize: 35,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        // paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default LoginScreen;