import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import LinarGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-picker';

const SignupScreen = ({ navigation }) => {
    // State handler
    const [data, setData] = React.useState({
        avatarSource: null,
        fisrtName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true
    });
    // Image picker handler
    const handleChoosePhoto = () => {
        const options = {
            takePhotoButtonTitle: 'Take Photo',
            chooseFromLibraryButtonTitle: ' Open Gallery'
        };
        // ImagePicker.launchImageLibrary(options, response => {
        //     console.log("Response : ", response);
        // })
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setData({
                    ...data,
                    avatarSource: source,
                });
            }
        });
    }
    // fisrtName imput handler
    const firstNameTextInputChange = (value) => {
        if (value.length !== 0) {
            setData({
                ...data,
                firstName: value,
            })
        } else {
            setData({
                ...data,
                firstName: value,
            })
        }
    };
    const lastNameTextInputChange = (value) => {
        if (value.length !== 0) {
            setData({
                ...data,
                lastName: value,
            })
        } else {
            setData({
                ...data,
                lastName: value,
            })
        }
    };
    const emailTextInputChange = (value) => {
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
    const phoneTextInputChange = (value) => {
        if (value.length !== 0) {
            setData({
                ...data,
                phone: value,
            })
        } else {
            setData({
                ...data,
                phone: value,
            })
        }
    };
    const handlePaswordChange = (value) => {
        setData({
            ...data,
            password: value
        })
    };
    const handleConfirmPaswordChange = (value) => {
        setData({
            ...data,
            password: value
        })
    };

    const updatePasswordSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    };
    const updateConfirmPasswordSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })
    };
    return (
        <ScrollView style={{ flex: 1}}>
        <View style={styles.container}>
            <LinarGradient colors={['#ccc', '#43D4FF', '#43BFC7', '#43BFC7']} style={{ flex: 1, paddingTop: 80 }}>
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            onPress={() => handleChoosePhoto()}>
                            {data.avatarSource ? <Animatable.Image
                                animation="bounceIn"
                                duraton="150"
                                source={data.avatarSource}
                                style={styles.logo}
                                resizeMode="stretch" />
                                :
                                <Animatable.Image
                                    animation="bounceIn"
                                    duraton="150"
                                    source={require('../assets/upload.png')}
                                    style={styles.logo}
                                    resizeMode="stretch" />}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textHeader}>Upload Profile Picture</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <View style={styles.nameContainer}>
                        {/* First Name */}
                        <View style={styles.firstNameContainer}>
                            <Text style={styles.textfooter}>First Name</Text>
                            <View style={styles.textInputContainer}>
                                    <FontAwesome name="user-o" color="#05375a" size={20}></FontAwesome>
                                <TextInput
                                    placeholder="First Name"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => firstNameTextInputChange(value)}></TextInput>
                            </View>
                        </View>
                        {/* Last Name */}
                        <View style={styles.lastNameContainer}>
                            <Text style={styles.textfooter}>Last Name</Text>
                            <View style={styles.textInputContainer}>
                                    <FontAwesome name="user-o" color="#05375a" size={20}></FontAwesome>
                                <TextInput
                                    placeholder="Last Name"
                                    style={styles.textInput}
                                    autoCapitalize='none'
                                    onChangeText={(value) => lastNameTextInputChange(value)}></TextInput>
                            </View>
                        </View>
                    </View>
                    {/* Email Field */}
                    <Text style={[styles.textfooter, { marginTop: 10 }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope" color="#05375a" size={20}></FontAwesome>
                        <TextInput
                            keyboardType='email-address' autoCorrect={false}
                            placeholder="Enter your email"
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(value) => emailTextInputChange(value)}></TextInput>
                        <Animatable.View
                            animation="bounceIn">
                            {data.check_textInputChange ?
                                <Feather name="check-circle" color='green' size={20}></Feather>
                                : null}
                        </Animatable.View>
                    </View>
                    {/* Phone number Field */}
                    <Text style={[styles.textfooter, { marginTop: 10 }]}>Phone</Text>
                    <View style={styles.action}>
                        <FontAwesome name="phone" color="#05375a" size={20}></FontAwesome>
                        <TextInput
                            keyboardType='number-pad' autoCorrect={false}
                            placeholder="Enter your email"
                            style={styles.textInput}
                            onChangeText={(value) => phoneTextInputChange(value)}></TextInput>
                        <Animatable.View
                            animation="bounceIn">
                            {data.check_textInputChange ?
                                <Feather name="check-circle" color='green' size={20}></Feather>
                                : null}
                        </Animatable.View>
                    </View>
                    {/* Password Field */}
                    <Text style={[styles.textfooter, { marginTop: 10 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name="lock" color="#05375a" size={25}></FontAwesome>
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            onChangeText={(value) => handlePaswordChange(value)}></TextInput>
                        <TouchableOpacity onPress={() => updatePasswordSecureTextEntry()}>
                            {data.secureTextEntry ?
                                <Feather name="eye-off" color='gray' size={20}></Feather>
                                :
                                <Feather name="eye" color='gray' size={20}></Feather>
                            }
                        </TouchableOpacity>
                    </View>
                    {/* Confirm Password Field */}
                    <Text style={[styles.textfooter, { marginTop: 10 }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name="lock" color="#05375a" size={25}></FontAwesome>
                        <TextInput
                            placeholder="Confirm password"
                            secureTextEntry={data.confirmSecureTextEntry ? true : false}
                            style={styles.textInput}
                            onChangeText={(value) => handleConfirmPaswordChange(value)}></TextInput>
                        <TouchableOpacity onPress={() => updateConfirmPasswordSecureTextEntry()}>
                            {data.secureTextEntry ?
                                <Feather name="eye-off" color='gray' size={20}></Feather>
                                :
                                <Feather name="eye" color='gray' size={20}></Feather>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <LinarGradient
                            colors={['#43BFC7', '#43BFC7']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: '#fff', fontSize: 22 }]}>Register</Text>
                        </LinarGradient>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                // borderColor: '#38ABFD',
                                // borderWidth: 1,
                                marginTop: 15
                            }]}
                            onPress={() => { navigation.navigate('LoginScreen') }}>
                            <Text>Have an account?</Text>
                            <Text style={[styles.textSign, { color: '#43BFC7', fontSize: 22 }]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </LinarGradient>
        </View>
        </ScrollView>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    footer: {
        flex: 5,
        backgroundColor: '#ccc',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    textfooter: {
        color: '#05375a',
        fontSize: 18
    },
    nameContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstNameContainer: {
        width: '50%',
    },
    lastNameContainer: {
        marginLeft: 10,
        width: '50%',
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
        borderRadius: height_logo / 2
    },
    title: {
        color: '#05375a',
        fontSize: 35,
        fontWeight: 'bold'
    },
    textInputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
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

export default SignupScreen;