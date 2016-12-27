import { Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'

export default {
  TEXT_NORMAL: IS_ANDROID ? '#343434' : '#000000',
  FORM_TEXTINPUT_TEXT: IS_ANDROID ? '#343434' : '#000000',
  FORM_TEXTINPUT_BORDER: '#cccccc',
  FORM_TEXTINPUT_BACKGROUND: 'white',
  PRIMARY: '#0288D1',
  PRIMARY_DARK: '#00324C',
  ACCENT: '#006FFF',
  LIGHT_GREY: '#EEEEEE',
  GREY: '#95989A',
  DARK_GREY: '#565b60',
  ALMOST_BLACK: '#33383D',
  BUTTON_DISABLED: '#c8cbc9',
  WHITE: '#FFFFFF'
}
