/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import DView from '../components/DView';
import utilities from '../../tailwind.json';
import DText from '../components/DText';
import {NavigationContainer} from '@react-navigation/native';
import DInputBox from '../components/DInputBox';
import DButton from '../components/DButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function () {
  const Tab = createMaterialTopTabNavigator();
  const deviceSize = Dimensions.get('screen');
  return (
    <NavigationContainer>
      <TailwindProvider utilities={utilities}>
        <DView styles="flex-1 bg-current">
          <DView
            styles="justify-center items-center"
            overrideStyles={{flex: 0.3}}>
            <ImageBackground
              imageStyle={{opacity: 0.3, resizeMode: 'contain'}}
              style={{flex: 1, justifyContent: 'flex-end'}}
              source={require('../../assets/images/Gaming.png')}>
              <DText styles="text-white text-[34px] text-center ">
                Welcome GameStore!
              </DText>
            </ImageBackground>
          </DView>
          <DView overrideStyles={{flex: 0.7}} styles="p-5">
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {
                  shadowColor: 'transparent',
                  paddingTop: 15,
                  elevation: 0,
                  backgroundColor: '#0d121f',
                },
                tabBarIndicatorStyle: {opacity: 0},
                tabBarPressColor: 'transparent',
              }}>
              <Tab.Screen
                name="Login"
                component={Login}
                options={{
                  tabBarLabel: ({focused}) => {
                    return (
                      <View
                        style={{
                          backgroundColor: focused ? '#F45FF8' : 'transparent',
                          padding: 10,
                          borderRadius: 100,
                          width: deviceSize.width / 2.5,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                          }}>
                          Login
                        </Text>
                      </View>
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Register"
                component={Register}
                options={{
                  tabBarLabel: ({focused}) => {
                    return (
                      <View
                        style={{
                          backgroundColor: focused ? '#F45FF8' : 'transparent',
                          padding: 10,
                          borderRadius: 100,
                          width: deviceSize.width / 2.5,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                          }}>
                          Register
                        </Text>
                      </View>
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </DView>
        </DView>
      </TailwindProvider>
    </NavigationContainer>
  );
}
function Login() {
  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior="padding">
      <DView styles="flex-1 bg-current py-5">
        <DInputBox placeholder="User name" iconName="account" />
        <DInputBox placeholder="Password" iconName="lock" isPassword />
        <DButton overrideButtonTextStyles={{fontSize: 16}}>Login</DButton>

        <DView styles="flex-row justify-center items-center">
          <DView styles="border-b border-[#D8D8DD] flex-1" />
          <DText styles="text-[#D8D8DD] m-1 flex-1 text-center">
            or login with
          </DText>
          <DView styles="border-b border-[#D8D8DD] flex-1" />
        </DView>
        <DView styles="flex-row justify-center items-center ">
          <DView styles="p-3 m-3 bg-[#313030]/[0.7] items-center justify-center rounded-md">
            <Icon name="google" size={25} color="white" />
          </DView>
          <DView styles="p-3 m-3 bg-[#313030]/[0.7] items-center justify-center rounded-md">
            <Icon name="apple" size={25} color="white" />
          </DView>
          <DView styles="p-3 m-3 bg-[#313030]/[0.7] items-center justify-center rounded-md">
            <Icon name="facebook" size={25} color="white" />
          </DView>
        </DView>
      </DView>
    </KeyboardAvoidingView>
  );
}
function Register() {
  return (
    <DView styles="flex-1 bg-current py-5">
      <KeyboardAvoidingView
        enabled
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <DInputBox placeholder="User name" iconName="account" />
          <DInputBox placeholder="E-mail" iconName="email" />
          <DInputBox placeholder="Password" iconName="lock" isPassword />
          <DInputBox placeholder="Re-Password" iconName="lock" isPassword />
          <DButton overrideButtonTextStyles={{fontSize: 16}}>Register</DButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </DView>
  );
}
