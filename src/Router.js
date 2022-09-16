import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Auth" component={AuthPage} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        <FlashMessage position="top" />
      </TailwindProvider>
    </NavigationContainer>
  );
}
