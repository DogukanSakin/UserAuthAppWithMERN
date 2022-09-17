/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import UserContext, {UserProvider} from './context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}

function Route() {
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    getCurrentUserData();
  }, []);
  async function getCurrentUserData() {
    try {
      const jsonValue = await AsyncStorage.getItem('@currentUser');
      const result = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUser(result);
    } catch (e) {
      console.log('Error in get user data (ROUTER) :' + e);
    }
  }

  return (
    <TailwindProvider utilities={utilities}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!user ? (
          <>
            <Stack.Screen name="Auth" component={AuthPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>

      <FlashMessage position="top" />
    </TailwindProvider>
  );
}
