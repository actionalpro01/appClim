import {StyleSheet, Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#18B1FF',
    fontSize: 30,
    fontWeight: '700',
    marginTop: (h * 95) / 667,
    alignSelf: 'center',
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
  UserPassword: {
    marginVertical: (h * 40) / 667,
    alignSelf: 'center',
  },
  inputVertical: {
    marginVertical: (h * 20) / 667,
  },
  buttonSignIn: {
    backgroundColor: '#18B1FF',
    paddingVertical: (w * 14) / 375,
    paddingHorizontal: (w * 65) / 375,
    borderRadius: 1000,
    alignSelf: 'center',
  },
  buttonText: {color: '#fff', fontSize: 19, fontWeight: '700'},
  forgetBottom: {
    marginTop: (h * 47) / 667,
    marginBottom: (h * 95) / 667,
    alignSelf: 'center',
  },
  forget: {
    fontSize: 16,
    color: '#9B9B9B',
  },

  bottomSign: {
    flexDirection: 'row',
    marginLeft: w / 5,
  },
  IconFace: {fontSize: (w * 46) / 375, color: '#3489DB'},
  IconGoogle: {
    fontSize: (w * 46) / 375,
    color: '#D0021B',
    marginLeft: (w * 19) / 375,
    marginRight: (w * 23) / 375,
  },
  signUpButton: {
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius: 1000,
    paddingHorizontal: (w * 48) / 375,
    paddingVertical: (w * 15) / 375,
  },
  signUpTexts: {
    fontSize: 16,
    color: '#585858',
  },
  signUpText: {fontWeight: '600'},
});
