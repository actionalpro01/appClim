import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './ProfileStyle';
import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
//FontAwesome5 child
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import {listData} from './ListData';
import RNPickerSelect from 'react-native-picker-select';
import ProgressCircle from 'react-native-progress-circle';

// export enum ModalKey {
//   About = 'About',
//   Edu = 'Edu',
//   Work = 'Work',
// }
export interface Group {
  id: string;
  iconName: string;
  title: string;
  content: InterAbout[] | InterEducation[] | InterWork[];
  type: number;
}
export interface InterAbout {
  id: string;
  title: string;
}
export interface InterEducation {
  id: string;
  title: string;
  isGrad: string;
}
export interface InterWork {
  id: string;
  title: string;
  position: string;
}
export function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(listData);
  const [titleModal, setTitleModal] = useState('');
  const [modal, setModal] = useState();
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');

  const addFormAbout = (type: number, contents: InterAbout) => {
    const cloneData = [...data];
    const isSelect = cloneData.find((item) => item.type === type);
    if (isSelect) {
      console.log(contents);
      isSelect.content.push(contents);
    }
    setData(cloneData);
  };
  const addFormEdu = (type: number, contents: InterEducation) => {
    const cloneData = [...data];
    const isSelect = cloneData.find((item) => item.type === type);
    if (isSelect) {
      isSelect.content.push(contents);
    }
    setData(cloneData);
  };
  const addFormWork = (type: number, contents: InterWork) => {
    const cloneData = [...data];
    const isSelect = cloneData.find((item) => item.type === type);
    if (isSelect) {
      isSelect.content.push(contents);
    }
    setData(cloneData);
  };
  const renderContentModal = (type: number) => {
    console.log(textInput1);
    return (
      <View>
        <TextInput
          placeholder="Here..."
          defaultValue={textInput1}
          style={styles.textInput}
          onChangeText={(text) => setTextInput1(text)}
        />
        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            addFormAbout(type, {
              id: Math.random().toString(),
              title: textInput1,
            });
            setModalVisible(false);
          }}>
          <Text style={styles.textStyle}>Agree</Text>
        </TouchableHighlight>
      </View>
    );
  };
  const renderContentModal2 = (type: number) => {
    return (
      <View>
        <TextInput
          placeholder="Here..."
          style={styles.textInput}
          defaultValue={textInput2}
          onChangeText={(text) => setTextInput2(text)}
        />
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            {label: 'Graduted', value: 'Graduted'},
            {label: 'No Graduation', value: 'No Graduation'},
          ]}
        />
        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            setModalVisible(false);
            addFormEdu(type, {
              id: Math.random().toString(),
              title: textInput2,
              isGrad: true,
            });
          }}>
          <Text style={styles.textStyle}>Agree</Text>
        </TouchableHighlight>
      </View>
    );
  };
  const renderContentModal3 = (type: number) => {
    return (
      <View>
        <TextInput
          placeholder="Here..."
          style={styles.textInput}
          defaultValue={textInput3}
          onChangeText={(text) => setTextInput3(text)}
        />
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            {label: 'Employee', value: 'Employee'},
            {label: 'Manager', value: 'Manager'},
            {label: 'Intern', value: 'Intern'},
            {label: 'Fresher', value: 'Fresher'},
            {label: 'Junior', value: 'Junior'},
          ]}
        />
        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            setModalVisible(false);
            addFormWork(type, {
              id: Math.random().toString(),
              title: textInput3,
              position: 'student',
            });
          }}>
          <Text style={styles.textStyle}>Agree</Text>
        </TouchableHighlight>
      </View>
    );
  };
  const renderModalMul = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleModel}>{titleModal}</Text>
            {modal}
          </View>
        </View>
      </Modal>
    );
  };
  const setContentModal = (type: number) => {
    const cloneData = [...data];
    const isSelect = cloneData.find((item) => item.type === type);
    switch (isSelect.type) {
      case 1:
        return renderContentModal(isSelect.type);
      case 2:
        return renderContentModal2(isSelect.type);
      case 3:
        return renderContentModal3(isSelect.type);
      default:
        return renderContentModal(isSelect.type);
    }
  };
  const renderAbout = (content: InterAbout[]) => {
    return (
      <View>
        {content.map((x, i) => (
          <View key={i} style={styles.flexRow}>
            <MaterialCommunityIcons name="rhombus" style={styles.rhombus} />
            <Text style={styles.contentInside}>{x.title}</Text>
          </View>
        ))}
      </View>
    );
  };
  const renderEducate = (content: InterEducation[]) => {
    return (
      <View>
        {content.map((x, i) => (
          <View key={i} style={styles.flexRow}>
            <MaterialCommunityIcons name="rhombus" style={styles.rhombus2} />
            <View>
              <Text>{x.title}</Text>
              <Text style={styles.fadedText}>
                {x.isGrad ? 'Graduate' : 'No Graduation'}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  const renderWork = (content: InterWork[]) => {
    return (
      <View>
        {content.map((x, i) => (
          <View key={i} style={styles.flexRow}>
            <MaterialCommunityIcons name="rhombus" style={styles.rhombus2} />
            <View>
              <Text>{x.title}</Text>
              <Text style={styles.fadedText}>{x.position}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  const Item = (prop) => {
    const itemSelect = (id: string) => {
      const cloneData = [...data];
      const selected = cloneData.find((item) => item.id === id);
      setTitleModal(selected.title);
      setModal(setContentModal(prop.type));
    };

    return (
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.itemTop}>
            <View style={styles.flexRow}>
              <FontAwesome name={prop.iconName} style={styles.iconLeft} />
              <Text style={styles.topic}>{prop.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={() => {
                setModalVisible(true);
                itemSelect(prop.id);
              }}>
              <Entypo name="plus" style={styles.iconRight} />
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hr} />
          <View style={styles.itemBody}>
            {prop.type === 1 && renderAbout(prop.content)}
            {prop.type === 2 && renderEducate(prop.content)}
            {prop.type === 3 && renderWork(prop.content)}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity>
          <Entypo name="menu" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity>
          <Entypo name="bell" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.top}>
        <ProgressCircle
          percent={50}
          radius={50}
          borderWidth={7}
          color="#3399FF">
          <Image
            style={styles.image}
            source={{
              uri:
                'https://photo-zmp3.zadn.vn/cover/0/b/b/5/0bb55eaf1f19451a075759258eab718d.jpg',
            }}
          />
        </ProgressCircle>

        <View style={styles.bottomImage}>
          <Text style={styles.name}>Maria Murhelrin</Text>
          <Text style={styles.percent}>Complete profile 50%</Text>
        </View>
      </View>
      <View style={styles.flexOne}>
        <FlatList data={data} renderItem={({item}) => Item(item)} />
        {renderModalMul()}
      </View>
    </View>
  );
}
