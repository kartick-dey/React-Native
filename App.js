import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import postsReducer from './store/reducers/posts';
import notificationReducer from './store/reducers/notifications';
import cartReducer from './store/reducers/cart'; 

import RootStackScreen from './navigation/RootStackScreen';
import MainTabScreen from './navigation/MainTabScreen';
import { AuthContext } from './components/context';
import { DrawerContent } from './screens/DrawerContent';

const rootReducer = combineReducers({
  posts: postsReducer,
  notifications: notificationReducer,
  carts: cartReducer
});
const store = createStore(rootReducer);

const Drawer = createDrawerNavigator();



const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('bhcvyucuec');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('sdvchdvcgd');
      setIsLoading(false)
    }
  }));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10)
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={authContext}>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content'></StatusBar>
            <NavigationContainer>
              {userToken !== null ? (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}></DrawerContent>}>
                  <Drawer.Screen name="Kartick" component={MainTabScreen} />
                </Drawer.Navigator>
              ) : <RootStackScreen></RootStackScreen>}
            </NavigationContainer>
          </SafeAreaView>
        </AuthContext.Provider>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;
