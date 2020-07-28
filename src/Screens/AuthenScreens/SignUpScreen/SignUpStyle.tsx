import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    marginTop: (h * 61) / 667,
    color: '#18B1FF',
    fontSize: 30,
    fontWeight: '700',
  },
  SignUpInput: {
    alignItems: 'center',
    marginTop: (h * 27) / 667,
  },
  inputVertical: {
    marginVertical: (h * 14) / 667,
  },
  inputIcons: {
    position: 'absolute',
    zIndex: 1,
    fontSize: w / 20,
    left: w / 16,
    top: w / 32,
    color: '#4A4A4A',
  },
  InputText: {
    width: (w * 93) / 125,
    backgroundColor: '#fff',
    height: (w * 45) / 375,
    fontSize: (w * 16) / 375,
    borderRadius: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    paddingLeft: (w * 4) / 25,
    paddingRight: (w * 4) / 35,
  },
  buttonNext: {
    backgroundColor: '#18B1FF',
    paddingVertical: (w * 14) / 375,
    paddingHorizontal: (w * 65) / 375,
    borderRadius: 1000,
    alignSelf: 'center',
    marginTop: (h * 39) / 667,
  },
  next: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '700',
  },
  bottomSign: {
    flexDirection: 'row',
    marginRight: w / 5,
    marginTop: (h * 87) / 667,
  },
  IconFace: {
    fontSize: (w * 46) / 375,
    color: '#3489DB',
    marginLeft: (w * 30) / 375,
    marginRight: (w * 21) / 375,
  },
  IconGoogle: {
    fontSize: (w * 46) / 375,
    color: '#D0021B',
  },
  signInButton: {
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    borderTopRightRadius: 1000,
    borderBottomRightRadius: 1000,
    paddingHorizontal: (w * 48) / 375,
    paddingVertical: (w * 15) / 375,
  },
  signInTexts: {
    fontSize: 16,
    color: '#585858',
  },
  signUpText: {fontWeight: '600'},
});
