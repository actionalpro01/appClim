import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import {Color} from '@configs';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (h * 31) / 667,
    marginHorizontal: (w * 12) / 375,
  },
  flexRow: {flexDirection: 'row'},
  flexOne: {flex: 1},
  title: {fontSize: 16, fontWeight: '500'},
  icon: {fontSize: 20},
  top: {
    alignItems: 'center',
  },
  image: {
    width: (w * 80) / 375,
    height: (w * 80) / 375,
    borderRadius: 1000,
    marginVertical: (w * 16) / 375,
  },
  bottomImage: {
    marginBottom: (w * 10) / 375,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  percent: {
    fontSize: 14,
    color: Color.grayDark,
  },
  body: {
    flex: 1,
  },
  item: {
    backgroundColor: Color.white,
    marginTop: (w * 16) / 375,
    paddingBottom: (w * 5) / 375,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: (w * 10) / 375,
  },
  iconLeft: {
    fontSize: 18,
    color: Color.grayDark,
    marginLeft: (w * 17) / 375,
  },
  iconRight: {
    fontSize: 18,
    color: Color.blue,
  },
  itemBody: {
    flexDirection: 'row',
    marginTop: (w * 10) / 375,
  },
  add: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.blue,
    marginRight: (w * 15) / 375,
  },
  topic: {fontSize: 16, fontWeight: '500', marginLeft: (w * 12) / 375},
  describe: {
    fontSize: 14,
    color: Color.black,
    width: '75%',
  },
  comment: {
    color: Color.grayLight,
  },
  hr: {
    borderWidth: 1,
    borderColor: '#F3F3F3',
    marginHorizontal: (w * 10) / 375,
  },
  rhombus: {
    color: Color.blue,
    fontSize: 10,
    top: (w * 3) / 375,
    marginLeft: (w * 21) / 375,
    marginRight: (w * 16) / 375,
  },
  rhombus2: {
    color: Color.blue,
    fontSize: 10,
    top: (w * 4) / 375,
    marginLeft: (w * 21) / 375,
    marginRight: (w * 16) / 375,
  },
  contentInside: {
    width: '80%',
  },
  trueFalse: {
    color: Color.grayLight,
    fontSize: 14,
    marginTop: (w * 10) / 375,
    marginBottom: (w * 4) / 375,
  },
  fadedText: {
    fontSize: 14,
    color: Color.grayDark,
    marginVertical: (w * 5) / 375,
  },
  //Modal
  titleModel: {
    fontSize: 18,
    fontWeight: '600',
    color: Color.blue,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    width: (w * 100) / 375,
    height: (w * 20) / 375,
    borderBottomWidth: 2,
    borderBottomColor: Color.blue,
    marginVertical: (w * 10) / 375,
  },
  pickerSelect: {
    marginVertical: (w * 10) / 375,
  },
});
