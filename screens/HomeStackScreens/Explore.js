import React from 'react';
import { View, FlatList } from 'react-native';

import { useSelector } from 'react-redux'

import Card from '../../components/Card'

const Explore = ({ navigation }) => {
    const posts = useSelector(state => state.posts.publicPosts);
    return (
        <>
            <View style={{ flex: 1 }}>
                {/* <View>Need to show recommend location</View> */}
                <FlatList
                    keyExtractor={(item, index) => item.name}
                    data={posts}
                    renderItem={({ item }) => (<Card name={item.name} posted={item.posted} image={item.img}></Card>)}></FlatList>
            </View>
        </>
    );
};

export default Explore;