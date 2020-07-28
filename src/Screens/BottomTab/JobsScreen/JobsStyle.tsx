import {StyleSheet, Dimensions} from 'react-native';
import {Color} from '@configs';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: (h * 31) / 667,
    marginHorizontal: (w * 15) / 375,
  },
  title: {fontSize: 14, fontWeight: '500'},
  icon: {fontSize: 18},
  rowTitle: {
    flexDirection: 'row',
    marginVertical: (h * 9) / 667,
  },
  pl: {
    marginTop: h / 667,
    marginLeft: (w * 15) / 375,
  },
  Text: {
    fontSize: 14,
    color: Color.grayDark,
  },
  TextInput: {
    width: w * 0.7,
  },
  iconP: {
    fontSize: 18,
    color: Color.grayLight,
    marginHorizontal: (w * 8) / 375,
    alignSelf: 'center',
  },
  iconL: {
    fontSize: 15,
    color: Color.grayLight,
    marginHorizontal: (w * 10) / 375,
    alignSelf: 'center',
  },
  distance: {
    fontWeight: '600',
    right: (w * 26) / 375,
  },
  slider: {
    width: (w * 4) / 5,
    height: 20,
    alignSelf: 'center',
    marginVertical: (h * 19) / 667,
  },
  viewWork: {
    flexDirection: 'row',
    marginVertical: (h * 5) / 375,
    marginLeft: (w * 12) / 375,
  },
  rhombus: {
    color: Color.blue,
    marginHorizontal: (w * 15) / 375,
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: (w * 122) / 375,
    alignItems: 'center',
    marginBottom: (w * 13) / 375,
    backgroundColor: Color.white,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemList: {
    flex: 1,
    marginTop: (h * 10) / 667,
  },
  imageItem: {
    width: (w * 80) / 375,
    height: (w * 80) / 375,
    marginHorizontal: (w * 10) / 375,
  },
  itemTitle: {
    fontWeight: '600',
    marginBottom: (w * 17) / 375,
  },
  TextMid: {
    fontSize: 14,
    color: Color.grayDark,
    marginBottom: (w * 7) / 375,
  },
  applyButtonTrue: {
    backgroundColor: Color.grayLight,
    paddingVertical: (w * 13) / 375,
    paddingRight: (w * 10) / 375,
    paddingLeft: (w * 19) / 375,
    borderBottomLeftRadius: 1000,
    borderTopLeftRadius: 1000,
  },
  applyButtonFalse: {
    backgroundColor: Color.blue,
    paddingVertical: (w * 13) / 375,
    paddingRight: (w * 10) / 375,
    paddingLeft: (w * 19) / 375,
    borderBottomLeftRadius: 1000,
    borderTopLeftRadius: 1000,
  },
  apply: {fontSize: 16, fontWeight: '600', color: Color.white},
});
