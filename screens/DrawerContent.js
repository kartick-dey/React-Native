import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avater,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Avatar
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image source={require('../assets/avater.png')}
                                size={50}></Avatar.Image>
                            <View style={{ marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Kartick Dey</Title>
                                <Caption style={styles.caption}>@Itzkartick</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>540</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={color} size={size}></Icon>
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="bookmark-outline" color={color} size={size}></Icon>
                            )}
                            label="Bookmarks"
                            onPress={() => { }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="cog-outline" color={color} size={size}></Icon>
                            )}
                            label="Settings"
                            onPress={() => { }}
                        >
                        </DrawerItem>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="account-check-outline" color={color} size={size}></Icon>
                            )}
                            label="Support"
                            onPress={() => { }}
                        >
                        </DrawerItem>
                    </Drawer.Section>
                    <Drawer.Section title='Preference'>
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                    <Text style={{ marginLeft: 17}}>Dark Theme</Text>
                                </View>
                                <View pointerEvents='none' style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                    <Switch value={isDarkTheme}></Switch>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size}></Icon>
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                >
                </DrawerItem>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    avater: {
        marginTop: 20,
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
    }
});