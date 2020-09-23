import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import NotificationScreen from './NotificationStackScreen/NotificationScreen'
import ViewNotification from './NotificationStackScreen/ViewNotiofication';

const NotificationStack = createStackNavigator();

const NotificationStackScreen = ({ navigation}) => {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="Notifications" component={NotificationScreen}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    )
                }}></NotificationStack.Screen>
            <NotificationStack.Screen name="View Nofification" component={ViewNotification}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    }
                }}></NotificationStack.Screen>
            </NotificationStack.Navigator>
    );
}



export default NotificationStackScreen;