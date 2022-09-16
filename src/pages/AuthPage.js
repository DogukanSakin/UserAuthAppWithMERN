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

import DInputBox from '../components/DInputBox';
import DButton from '../components/DButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useForm, Controller} from 'react-hook-form';
import client from '../api/client';
import {showMessage} from 'react-native-flash-message';

export default function AuthPage({navigation}) {
  const Tab = createMaterialTopTabNavigator();
  const deviceSize = Dimensions.get('screen');

  return (
    <DView styles="flex-1 bg-current">
      <DView styles="justify-center items-center" overrideStyles={{flex: 0.3}}>
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
  );
}
function Login({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  async function onSubmit(data) {
    try {
      const response = await client.post('/login', {...data});
      if (response.data.success === false) {
        showMessage({
          message: response.data.message,
          type: 'danger',
        });
      } else if (response.data.success === true) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('ERROR IN LOGIN: ' + error.message);
    }
  }
  return (
    <KeyboardAvoidingView enabled style={{flex: 1}} behavior="padding">
      <DView styles="flex-1 bg-current py-5">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <DInputBox
              placeholder="E-mail"
              iconName="email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              overrideStyles={{
                borderColor: errors.email ? 'red' : 'transparent',
                borderWidth: errors.email ? 1 : 0,
              }}
            />
          )}
          name="email"
        />
        {errors.email && (
          <DText styles="text-red-600">Email is required.</DText>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <DInputBox
              placeholder="Password"
              iconName="lock"
              isPassword
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              overrideStyles={{
                borderColor: errors.password ? 'red' : 'transparent',
                borderWidth: errors.password ? 1 : 0,
              }}
            />
          )}
          name="password"
        />
        {errors.password && (
          <DText styles="text-red-600">Password is required.</DText>
        )}

        <DButton
          overrideButtonTextStyles={{fontSize: 16}}
          onPress={handleSubmit(onSubmit)}>
          Login
        </DButton>

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
function Register({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      repassword: '',
    },
  });
  async function onSubmit(data) {
    try {
      const response = await client.post('/create-user', {...data});
      console.log('response:' + response.data);
      if (response.data.success === false) {
        showMessage({
          message: response.data.message,
          type: 'danger',
        });
      } else if (response.data.success === true) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('ERROR IN REGISTER: ' + error.message);
    }
  }
  return (
    <DView styles="flex-1 bg-current py-5">
      <KeyboardAvoidingView
        enabled
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <DInputBox
                placeholder="User name"
                iconName="account"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                overrideStyles={{
                  borderColor: errors.userName ? 'red' : 'transparent',
                  borderWidth: errors.userName ? 1 : 0,
                }}
              />
            )}
            name="userName"
          />
          {errors.userName && (
            <DText styles="text-red-600">User name is required.</DText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <DInputBox
                placeholder="E-mail"
                iconName="email"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                overrideStyles={{
                  borderColor: errors.email ? 'red' : 'transparent',
                  borderWidth: errors.email ? 1 : 0,
                }}
              />
            )}
            name="email"
          />
          {errors.email && (
            <DText styles="text-red-600">E-mail is required.</DText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <DInputBox
                placeholder="Password"
                iconName="lock"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                isPassword
                overrideStyles={{
                  borderColor: errors.password ? 'red' : 'transparent',
                  borderWidth: errors.password ? 1 : 0,
                }}
              />
            )}
            name="password"
          />
          {errors.password && (
            <DText styles="text-red-600">Password is required.</DText>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <DInputBox
                placeholder="Re-Password"
                iconName="lock"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                isPassword
                overrideStyles={{
                  borderColor: errors.repassword ? 'red' : 'transparent',
                  borderWidth: errors.repassword ? 1 : 0,
                }}
              />
            )}
            name="repassword"
          />
          {errors.repassword && (
            <DText styles="text-red-600">Re-password is required.</DText>
          )}

          <DButton
            overrideButtonTextStyles={{fontSize: 16}}
            onPress={handleSubmit(onSubmit)}>
            Register
          </DButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </DView>
  );
}
