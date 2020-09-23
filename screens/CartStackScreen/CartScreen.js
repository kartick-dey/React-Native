import React from 'react';
import { View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

import ViewCartCard from '../../components/ViewCartCard';

const CartScreen = () => {
    const carts = useSelector(state => state.carts.carts);
    return (
        <View>
            <FlatList
                keyExtractor={(cart, index) => cart.name}
                data={carts}
                renderItem={({ cart }) => (<ViewCartCard></ViewCartCard>)}></FlatList>
        </View>
    );
}

export default CartScreen;