import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();
import styles from './HeaderStyle';
interface HeaderProps {
  title: string;
}
export function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      <Entypo name="menu" size={25} />
      <Text style={styles.title}>{props.title}</Text>
      <Entypo name="bell" size={25} />
    </View>
  );
}
