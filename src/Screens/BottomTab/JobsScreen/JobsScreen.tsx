import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import styles from './JobsStyle';
import Slider from '@react-native-community/slider';
import {Header, Button, Input} from '@components';
import axios from 'axios';
import {Color} from '@configs';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
MaterialIcons.loadFont();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
interface Itemprops {
  title: string;
  salary: string;
  location: string;
  image: string;
  isExpired: boolean;
}
export function JobsScreen() {
  useEffect(() => getData(), []);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const getData = () => {
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/jobs',
    }).then(function (response) {
      setData(response.data);
    });
  };

  const Item = (props: Itemprops) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: props.image}} style={styles.imageItem} />
          <View>
            <Text style={styles.itemTitle}>{props.title}</Text>
            <Text style={styles.TextMid}>Base salary: {props.salary}</Text>
            <Text style={styles.Text}>Location: {props.location}</Text>
          </View>
        </View>
        {props.isExpired ? (
          <View style={styles.applyButtonTrue}>
            <Text style={styles.apply}>Apply</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.applyButtonFalse}>
            <Text style={styles.apply}>Apply</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  // const filterData = () => {
  //   // input: DataView, keyword
  //   let filterData: Itemprops[] = [];
  //   for (let item of data) {
  //     if (item.title.includes(keyword) === true && item.isExpired === false) {
  //       filterData.push(item);
  //     }
  //   }
  //   // outPut: listFilter
  //   return filterData;
  // };
  const onSearch = () => {
    let filterData = [];
    for (let item: Itemprops of data) {
      if (item.title.includes(keyword) === true && item.isExpired === false) {
        filterData.push(item);
      } else if (keyword === '') {
        filterData = [...data];
      }
    }
    return filterData;
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity>
          <Entypo name="menu" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Jobs</Text>
        <TouchableOpacity>
          <Entypo name="bell" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.pl}>
        <View style={styles.rowTitle}>
          <MaterialIcons name="place" style={styles.iconP} />
          <TextInput
            value={keyword}
            style={[styles.Text, styles.TextInput]}
            onChangeText={(text) => {
              setKeyword(text);
            }}
            placeholder={'Place'}
          />
        </View>
        <View style={styles.rowTitle}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Entypo name="hair-cross" style={styles.iconL} />
            <TextInput
              style={[styles.Text, styles.TextInput]}
              placeholder={'Geography'}
            />
          </View>
          <Text style={styles.distance}>15m</Text>
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={Color.blue}
        maximumTrackTintColor="#F3F3F3"
        thumbTintColor={Color.blue}
      />
      <View style={styles.viewWork}>
        <MaterialCommunityIcons name="rhombus" style={styles.rhombus} />
        <Text style={styles.Text}>We have 12 work recommend for you</Text>
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={onSearch()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => Item(item)}
        />
      </View>
    </View>
  );
}
