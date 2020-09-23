import React from 'react'
import { View, FlatList, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import NotificationCard from '../../components/NotificationCard';

import { useSelector } from 'react-redux';

const NotificationScreen = () => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21){
        TouchableComponent = TouchableNativeFeedback
    }
    const notifications = useSelector(state => state.notifications.notifications);
    return (
        <View>
            <FlatList
                keyExtractor={(item, index) => item.name}
                data={notifications}
                renderItem={({ item }) => (
                    <TouchableComponent onPress={() => alert('Clicked!')}>
                        <NotificationCard
                            name={item.name}
                            posted={item.posted}
                            subject={item.subject}
                            icon={item.icon}></NotificationCard>
                    </TouchableComponent>
                )}></FlatList>
        </View>
    );
}

export default NotificationScreen;