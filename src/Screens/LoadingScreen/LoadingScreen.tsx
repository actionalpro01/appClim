import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './LoadingStyle';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
export function LoadingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    Check();
  });
  const Check = async () => {
    (await isLogin()) ? navigationBottomTab() : navigationAuthenStack();
  };
  const navigationBottomTab = () => {
    navigation.navigate('BottomTab');
  };
  const navigationAuthenStack = () => {
    navigation.navigate('Authen');
  };
  const isLogin = async () => {
    const value = await AsyncStorage.getItem('userKey');
    if (value) {
      return true;
    }
    return false;
  };
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>wwowoo</Text>
    </View>
  );
}
