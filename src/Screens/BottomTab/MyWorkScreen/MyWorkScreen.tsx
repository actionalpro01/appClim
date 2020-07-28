import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import styles from './MyWorkStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '@configs';
export function MyWorkScreen() {
  const navigation = useNavigation();
  const logOut = () => {
    AsyncStorage.setItem('userKey', ' ')
      .then(() => {
        navigation.navigate(Screen.Authen);
      })
      .catch(() => {
        Alert.alert(' ', 'Error');
      });
    AsyncStorage.setItem('accessToken', ' ')
      .then(() => {
        navigation.navigate(Screen.Authen);
      })
      .catch(() => {
        Alert.alert(' ', 'Error');
      });
    AsyncStorage.setItem('userInfo', ' ')
      .then(() => {
        navigation.navigate(Screen.Authen);
      })
      .catch(() => {
        Alert.alert(' ', 'Error');
      });
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => logOut()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
