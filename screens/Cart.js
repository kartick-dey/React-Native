import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from './CartStackScreen/CartScreen'
// import ViewCart from './CartStackScreen/ViewCart';

const CartStack = createStackNavigator();

const CartStackScreen = ({ navigation }) => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Carts" component={CartScreen}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    )
                }}></CartStack.Screen>
            {/* <CartStack.Screen name="View Cart" component={ViewCart}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    }
                }}></CartStack.Screen> */}
        </CartStack.Navigator>
    );
}



export default CartStackScreen;