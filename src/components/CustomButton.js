import React, { PropTypes } from 'react'
import { ActivityIndicator, StyleSheet, Text } from 'react-native'

import TouchableView from './TouchableView'
import colors from '../config/colors'

const CustomButton = ({ onPress, isEnabled, isLoading, text, buttonStyle, textStyle }) => {
  const backgroundColor = isEnabled && !isLoading ? 'white' : colors.BUTTON_DISABLED
  const color = isEnabled && !isLoading ? colors.PRIMARY_DARK : 'white'
  const onButtonPress = isEnabled && !isLoading ? onPress : () => null

  return (
    <TouchableView onPress={onButtonPress} style={[styles.button, { backgroundColor }, buttonStyle]}>
      {(isLoading) && <ActivityIndicator style={styles.spinner} color={'grey'} />}
      {(!isLoading) && <Text style={[styles.text, { color }, textStyle]}>{text}</Text>}
    </TouchableView>
  )
}

CustomButton.propTypes = {
  onPress: PropTypes.func,
  isEnabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any
}

CustomButton.defaultProps = {
  onPress: () => null,
  isEnabled: true,
  isLoading: false,
  text: 'Test'
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  spinner: {
    height: 26
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white'
  }
})

export default CustomButton
