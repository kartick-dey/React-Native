import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView, TextInput, Image } from 'react-native';

const { height, width } = Dimensions.get("window");

class DemoHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBanner: [
                require('../assets/Fish_Eggs.jpg'),
                require('../assets/aqurium-fish.jpg'),
                require('../assets/fish-seeds.jpg'),
                require('../assets/sea-fish.jpg'),
                require('../assets/dhani.jpg'),
            ]
        }
    }
    async componentDidMount() {
        const url = "";
        return fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    isLoading: false,
                    // dataBanner: responseJson.banner
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    isLoading: false
                })
            })
    }
    render() {
        return (
                <View style={styles.demoHomeContainer}>
                    <View style={styles.brandLogoContainer}>
                        <Image source={require("../assets/appIcon.png")} style={styles.brandlogo}></Image>
                    <Text style={styles.brandName}>FishMarket</Text>
                    </View>
                    <View style={styles.swiperContainer}>
                    {/* <Swiper style={{height: width / 2}}>
                        {this.state.dataBanner.map((item) => {
                            return(
                                <Image key={item} style={{width: width, height: width / 2}} source={{item}}></Image>
                            )
                        })}
                    </Swiper> */}
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    demoHomeContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    brandLogoContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    brandlogo: {
        width: 50,
        height: 50,
        padding: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 25,
    },
    brandName: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontFamily: 'Ranchers-Regular'
    },
});

export default DemoHome;