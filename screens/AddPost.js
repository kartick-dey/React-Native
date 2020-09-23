import React, { useState } from 'react'
import { View, ScrollView, ActivityIndicator, StyleSheet, TextInput, Text, TouchableOpacity, Picker } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Image, Divider } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';

const AddPostStack = createStackNavigator();

const AddPostStackScreen = ({ navigation }) => {
    return (
        <AddPostStack.Navigator>
            <AddPostStack.Screen name="Update Your Market" component={AddPost}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={styles.headerLeft} onPress={() => navigation.openDrawer()}></FontAwesome>
                    ),
                    // headerRight: () => (
                    //     <FontAwesome name="plus" size={16}
                    //         style={styles.headerRight} onPress={() => navigation.openDrawer()}> Post</FontAwesome>
                    // )
                }}></AddPostStack.Screen>
        </AddPostStack.Navigator>
    );
}
export default AddPostStackScreen;

const AddPost = ({ navigation }) => {
    const [inputData, setInputData] = useState({
        imageData: null,
        name: null,
        type: null,
        transport: null,
        exportDate: null,
        exportTime: null,
        ratePrice: null,
        rateUnit: 'Select a unit'
    });
    // Date & Time picker handler
    const [date, setDate] = useState();

    const handleDateOnChange = (date) => {
        setDate(date);
    }

    // Image Handling function
    const handleSelectPhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log(response);
            setInputData({
                ...inputData,
                imageData: response.data
            });
        });
    }

    // Transport Value handler
    const selectedValueHandler = (value) => {
        setInputData({
            ...inputData,
            transport: value
        })
    }
    // rate unit Value handler
    const selectedRateUnitHandler = (value) => {
        setInputData({
            ...inputData,
            rateUnit: value
        })
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.contentImage}>
                    <View style={styles.imageContainer}>
                        {inputData.imageData ? <Image
                            source={{ uri: 'data:image/jpeg;base64,' + inputData.imageData }}
                            style={{ width: 400, height: 200 }}
                            PlaceholderContent={<ActivityIndicator />}
                        /> : <TouchableOpacity onPress={() => handleSelectPhoto()}
                            style={{ borderRadius: 60, backgroundColor: '#43BFC7' }}>
                                <View style={styles.imageContainer}>
                                    <Icon name="camera" size={50} style={styles.cameraIcon}></Icon>
                                </View>
                            </TouchableOpacity>}
                    </View>
                    <View style={styles.uploadButtonContainer}>
                        <TouchableOpacity
                            onPress={() => handleSelectPhoto()}
                            style={styles.uploadButton}>
                            <FontAwesome name="picture-o" size={15} color="#43BFC7"></FontAwesome>
                            <Text style={{ color: '#43BFC7', fontSize: 16, marginLeft: 10 }}>Upload a Photo</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.contentDesc, { marginTop: 30 }]}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>Fish's Name</Text>
                        <TextInput placeholder="@example: katla" style={styles.textInput}></TextInput>
                    </View>
                </View>
                <View style={styles.contentDesc}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>Type of Fish</Text>
                        <Picker
                            selectedValue={inputData.fishcategory}
                            style={styles.unitInput}
                            onValueChange={(itemValue, itemIndex) => selectedRateUnitHandler(itemValue)}>
                            <Picker.Item label="Select a Fish Category" value="" />
                            <Picker.Item label="Fish Spawn" value="Fish Spawn" />
                            <Picker.Item label="Fish Seed" value="Fish Seed" />
                            <Picker.Item label="Fish" value="Fish" />
                            <Picker.Item label="Aquarium Fish" value="Aquarium Fish" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.contentDesc}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>Transport</Text>
                        <Picker
                            selectedValue={inputData.transport}
                            style={styles.unitInput}
                            onValueChange={(itemValue, itemIndex) => selectedValueHandler(itemValue)}
                        >
                            <Picker.Item label="Select a Transport Facility" value="" />
                            <Picker.Item label="Not Available" value="Not Available" />
                            <Picker.Item label="Condition Applicable" value="Condition Applicable" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.contentDesc}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>Export Time & Date</Text>
                        <View style={styles.datePicker}>
                            <DatePicker
                                style={{ width: 200 }}
                                date={date} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="Select date"
                                format="DD-MM-YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 3,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        // backgroundColor: '#e9f2f2',
                                        borderRadius: 5,
                                        height: 40,
                                        borderWidth: 0,

                                    }
                                }}
                                onDateChange={(date) => handleDateOnChange(date)}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.contentDesc}>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.label}>Price</Text>
                        <View style={styles.rateContainer}>
                            <View style={styles.priceContainer}>
                                <Text>Rs.</Text>
                                <TextInput keyboardType='number-pad' autoCorrect={false} placeholder="@example: 100" style={styles.rateInput}></TextInput>
                            </View>
                            <View style={styles.unitContainer}>
                                <Picker
                                    selectedValue={inputData.rateUnit}
                                    style={styles.unitInput}
                                    onValueChange={(itemValue, itemIndex) => selectedRateUnitHandler(itemValue)}>
                                    <Picker.Item label="Select a unit" value="" />
                                    <Picker.Item label="Packet" value="Packet" />
                                    <Picker.Item label="kg" value="kg" />
                                    <Picker.Item label="Piece" value="Piece" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.contentDesc}>
                    <TouchableOpacity onPress={() => { }} style={styles.commandButton}>
                        <Text style={styles.panelButtonTitle}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerRight: {
        marginTop: 5,
        marginRight: 20,
        backgroundColor: '#43BFC7',
        padding: 7,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
        color: 'white'
    },
    headerLeft: {
        marginLeft: 25
    },
    contentImage: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
    uploadButtonContainer: {
        marginTop: 10,
        width: 200,
        color: '#43BFC7'
    },
    uploadButton: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        // padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#e9f2f2",
        borderColor: '#43BFC7',
        borderWidth: 1,
        borderRadius: 5,
    },
    contentDesc: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputContainer: {
        // padding: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
        width: '90%',
        flexDirection: 'column',
        // marginTop: 10,
        // elevation: 0.2,
        borderRadius: 5,
        // borderColor: null,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Medium',
        color: '#6a6b6a',
        // textTransform: 'uppercase',
        // letterSpacing: 0.5,
        marginBottom: 5
    },
    textInput: {
        fontSize: 16,
        letterSpacing: 1,
        // backgroundColor: '#e9f2f2',
        borderRadius: 5,
        height: 40,
        // borderWidth: 0.1
    },
    rateContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    priceContainer: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center'
    },
    unitContainer: {
        width: '50%',
    },
    rateInput: {
        marginLeft: 5,
        fontSize: 16,
        letterSpacing: 1,
        // backgroundColor: '#e9f2f2',
        borderRadius: 5,
        height: 40,
        width: 150
        // borderWidth: 0.1
    },
    unitInput: {
        marginTop: -5,
        borderColor: '#43BFC7',
        borderWidth: 2,
    },
    commandButton: {
        width: '80%',
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#43BFC7',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButtonTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})