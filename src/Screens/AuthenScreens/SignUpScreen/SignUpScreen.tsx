import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './SignUpStyle';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import Foundation from 'react-native-vector-icons/Foundation';
Foundation.loadFont();
import Fontisto from 'react-native-vector-icons/Fontisto';
Fontisto.loadFont();
import {useNavigation} from '@react-navigation/native';
export function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CLIMB</Text>
      <View style={styles.SignUpInput}>
        <View style={styles.inputVertical}>
          <AntDesign name="user" style={styles.inputIcons} />
          <TextInput placeholder={'User'} style={styles.InputText}></TextInput>
        </View>
        <View style={styles.inputVertical}>
          <Fontisto name="email" style={styles.inputIcons} />
          <TextInput
            placeholder={'Email Address'}
            style={styles.InputText}></TextInput>
        </View>
        <View style={styles.inputVertical}>
          <Foundation name="key" style={styles.inputIcons} />
          <TextInput
            placeholder={'Password'}
            style={styles.InputText}></TextInput>
        </View>
        <View style={styles.inputVertical}>
          <Foundation name="key" style={styles.inputIcons} />
          <TextInput
            placeholder={'Confirm Password'}
            style={styles.InputText}></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonNext}>
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
      <View style={styles.bottomSign}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.signInTexts}>
            Or <Text style={styles.signUpText}> Sign in</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="facebook-with-circle" style={styles.IconFace} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="google--with-circle" style={styles.IconGoogle} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
