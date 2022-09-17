/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import UserContext from '../context/userContext';
import DView from '../components/DView';
import DText from '../components/DText';
import DButton from '../components/DButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function HomePage() {
  const {user, setUser} = useContext(UserContext);
  async function handleLogout() {
    try {
      setUser(null);
      await AsyncStorage.setItem('@currentUser', JSON.stringify(user));
      console.log('Successfuly logout!');
    } catch (e) {
      console.log('Set user data error in login func. : ' + e);
    }
  }
  return (
    <DView styles="flex-1 bg-current p-5">
      <DText styles="text-white text-[14px] text-center">
        Current user username: {user.userName}
      </DText>
      <DButton overrideButtonTextStyles={{fontSize: 16}} onPress={handleLogout}>
        Logout
      </DButton>
    </DView>
  );
}
