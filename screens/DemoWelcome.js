import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, Text, Animated } from 'react-native';
import LinarGradient from 'react-native-linear-gradient';



class DemoWelcome extends Component {
    constructor({ navigation }) {
        super(navigation);
     }
    state = {
        logoAnime: new Animated.Value(0),
        logoText: new Animated.Value(0),
        loadingSpinner: false
    };

    componentDidMount() {
        const { logoAnime, logoText } = this.state;
        Animated.parallel([
            Animated.spring(logoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000
            }).start(),
            Animated.timing(logoText, {
                toValue: 1,
                duration: 3000
            }).start(() => {
                this.setState({
                    loadingSpinner: true,
                });
                setTimeout(this.navigation.navigate("LoginScreen"), 5000);
            })
        ])
    };
    render() {
        return (
            <>
                <StatusBar backgroundColor='#43D4FF' barStyle='dark-content'></StatusBar>
                <LinarGradient colors={['#43D4FF', '#43BFC7', '#43BFC7']} style={{ flex: 1 }}>
                    <View style={styles.demoWelcomeContainer}>
                        <Animated.View style={{
                            opacity: this.state.logoAnime,
                            top: this.state.logoAnime.interpolate({
                                inputRange: [0, 1],
                                outputRange: [80, 0]
                            })
                        }}>
                            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                        </Animated.View>
                        <Animated.View style={{
                            opacity: this.state.logoText,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={styles.title}>Aquarium</Text>
                            <Text style={styles.subTitle}>India's No.1 Fish Bazar</Text>
                        </Animated.View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { navigation.navigate("LoginScreen") }}>
                                <LinarGradient
                                    colors={['#43BFC7', '#43BFC7']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Get Started</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20}></MaterialIcons>
                                </LinarGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinarGradient>
            </>
        );
    }
}

export default DemoWelcome;

const styles = StyleSheet.create({
    demoWelcomeContainer: {
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
})