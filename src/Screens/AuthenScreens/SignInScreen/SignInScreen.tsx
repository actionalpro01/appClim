import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Screen} from '@configs';
import {useNavigation} from '@react-navigation/native';
import styles from './SignInStyle';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import Foundation from 'react-native-vector-icons/Foundation';
Foundation.loadFont();
import Fontisto from 'react-native-vector-icons/Fontisto';
Fontisto.loadFont();
import AsyncStorage from '@react-native-community/async-storage';
import {ButtonFB} from './ButtonFB';
export function SignInScreen() {
  useEffect(
    () =>
      GoogleSignin.configure({
        webClientId:
          '1027473222243-sf9f72pt6jkrip6hkmuileq6v0muetlh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      }),
    [],
  );
  const signInFB = async () => {
    await ButtonFB((accessToken: string) => {
      AsyncStorage.setItem('accessToken', accessToken).then(() => {
        navigation.navigate(Screen.BottomTab);
      });
    });
  };
  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      AsyncStorage.setItem('userInfo', userInfo).then(() => {
        navigation.navigate(Screen.BottomTab);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();
  const userTrue = 'Contact@abc.com';
  const passwordTrue = 'ABC@123';

  const handleClick = () => {
    if (user === userTrue && pass === passwordTrue) {
      AsyncStorage.setItem('userKey', user).then(() => {
        navigation.navigate(Screen.BottomTab);
      });
    } else {
      Alert.alert(
        'Error',
        'RORORORORORORORO',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CLIMB</Text>
      <View style={styles.UserPassword}>
        <View style={styles.inputVertical}>
          <AntDesign name="user" style={styles.inputIcons} />
          <TextInput
            placeholder={'User'}
            style={styles.InputText}
            onChangeText={(user) => setUser(user)}
            defaultValue={user}
          />
        </View>
        <View style={styles.inputVertical}>
          <Foundation name="key" style={styles.inputIcons} />
          <TextInput
            placeholder={'Password'}
            style={styles.InputText}
            secureTextEntry={true}
            onChangeText={(pass) => setPass(pass)}
            defaultValue={pass}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => handleClick()}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgetBottom}
        onPress={() => navigation.goBack()}>
        <Text style={styles.forget}>Forget password?</Text>
      </TouchableOpacity>
      <View style={styles.bottomSign}>
        <TouchableOpacity onPress={() => signInFB()}>
          <Entypo name="facebook-with-circle" style={styles.IconFace} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signInGoogle()}>
          <Entypo name="google--with-circle" style={styles.IconGoogle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate(Screen.SignUp)}>
          <Text style={styles.signUpTexts}>
            Or <Text style={styles.signUpText}> Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
