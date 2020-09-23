import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

const EditProfileScreen = ({navigation}) => {
    const [profileImage, setProfileImage] = useState(null);
    const handleChoosePhoto = (option) => {
        const options = {
        };
        if (option == 'Library'){
            // Open Image Library:
            ImagePicker.launchImageLibrary(options, response => {
                // console.log("Response : ", response);
                const source = { uri: response.uri };
                setProfileImage({
                    ...source 
                });
                console.log("Profile image : ", profileImage)

            })
        } else {
            // Launch Camera:
            ImagePicker.launchCamera(options, (response) => {
                // console.log("Response : ", response);
                const source = { uri: response.uri };
                setProfileImage({
                    ...source
                });
                console.log("Profile image : ", profileImage)
            });
        }
    };

    const onSubmit = () => {
        navigation.navigate('Profile');
    }
    const bottomSheet = React.createRef();
    const fall = new Animated.Value(1);
    const renderInnerContent = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={() => handleChoosePhoto('Camera')}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => handleChoosePhoto('Library')}>
                <Text style={styles.panelButtonTitle}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}
            onPress={() => bottomSheet.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <BottomSheet
                    ref={bottomSheet}
                    snapPoints={[330, 0]}
                    renderContent={renderInnerContent}
                    renderHeader={renderHeader}
                    initialSnap={1}
                    callbackNode={fall}
                    enabledGestureInteraction={true}
                ></BottomSheet>
                <View style={{ marginTop: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {bottomSheet.current.snapTo(0) }} 
                        style={{ borderRadius: 60, backgroundColor: '#43BFC7' }}>
                            <View style={styles.imageContainer}>
                                {profileImage ? <Animatable.Image
                                    animation="bounceIn"
                                    duraton="150"
                                    source={profileImage}
                                    style={{ width: 120, height: 120, borderRadius: 100}}
                                    resizeMode="stretch" /> :
                                <Icon name="camera" size={50} style={styles.cameraIcon}></Icon>
                                }
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.username}>Kartick Dey</Text>
                    </View>
                    <View style={styles.fieldContainer}>
                        <View style={styles.field}>
                            <FontAwesome name="user-o" size={18}></FontAwesome>
                            <TextInput placeholder="First Name" placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <FontAwesome name="user-o" size={18}></FontAwesome>
                            <TextInput placeholder="Last Name" placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <Icon name="home-outline" size={18}></Icon>
                            <TextInput placeholder="Fishery Name" placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <Icon name="link" size={18}></Icon>
                            <TextInput placeholder="Specialist for...." placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <FontAwesome name="envelope-o" size={18}></FontAwesome>
                            <TextInput placeholder="Email" placeholderTextColor="#666666"
                                style={styles.textInput} keyboardType="email-address" autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <Feather name="phone" size={18}></Feather>
                            <TextInput placeholder="Phone Number" placeholderTextColor="#666666"
                                style={styles.textInput} keyboardType='number-pad' autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <FontAwesome name="globe" size={18}></FontAwesome>
                            <TextInput placeholder="State" placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <View style={styles.field}>
                            <Icon name="map-marker-outline" size={18}></Icon>
                            <TextInput placeholder="District" placeholderTextColor="#666666"
                                style={styles.textInput} autoCorrect={false}></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => onSubmit()} style={styles.commandButton}>
                            <Text style={styles.panelButtonTitle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1}}></View>
            </View>
        </ScrollView>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    imageContainer: {
        height: 120,
        width: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#fff',
        borderRadius: 10
    },
    username: {
        marginTop: 10,
        fontSize: 23,
        fontWeight: 'bold'
    },
    commandButton: {
        width: '80%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#43BFC7',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#43BFC7',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    fieldContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingLeft: 5,
    },
    fieldError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});