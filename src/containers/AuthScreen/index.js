import React, { Component, PropTypes } from 'react'
import { KeyboardAvoidingView, LayoutAnimation, Platform, StyleSheet, UIManager } from 'react-native'
import { Image, View } from 'react-native-animatable'

import imgLogo from '../../images/logo.png'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

import Opening from './Opening'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)

export default class AuthScreen extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    onLoginAnimationCompleted: PropTypes.func.isRequired
  }

  state = {
    visibleForm: null // Can be: null | SIGNUP | LOGIN
  }

  componentWillUpdate (nextProps) {
    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this._hideAuthScreen()
    }
  }

  _hideAuthScreen = async () => {
    // 1. Hide the form content
    if (this.formRef && this.formRef.hideForm) {
      await this.formRef.hideForm()
    }
    // 2. Slide out the form container
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    this._setVisibleForm(null)
    // 3. Fade out the logo
    setTimeout(() => this.logoImgRef.fadeOut(400), 800)
    setTimeout(this.props.onLoginAnimationCompleted, 1300)
  }

  _setVisibleForm = (visibleForm) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    this.setState({ visibleForm })
  }

  _handleCreateAccountPress = () => {
    this._setVisibleForm('SIGNUP')
  }

  _handleLoginLinkPress = async () => {
    if (this.formRef && this.formRef.hideForm) {
      await this.formRef.hideForm()
    }
    this._setVisibleForm('LOGIN')
  }

  _handleSignupLinkPress = async () => {
    if (this.formRef && this.formRef.hideForm) {
      await this.formRef.hideForm()
    }
    this._setVisibleForm('SIGNUP')
  }

  // https://medium.com/@erikras/the-hoc-drill-pattern-a676a3889ced#.lrsbocxj7
  render () {
    const { isLoggedIn, isLoading, signup, login } = this.props
    const { visibleForm } = this.state
    const formStyle = (!visibleForm) ? { height: 0 } : { marginTop: 40 }
    return (
      <View style={styles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={styles.logoImg}
          source={imgLogo}
        />
        {(!visibleForm && !isLoggedIn) && (
          <Opening
            onCreateAccountPress={() => this._setVisibleForm('SIGNUP')}
            onSignInPress={() => this._setVisibleForm('LOGIN')}
          />
        )}
        <KeyboardAvoidingView
          keyboardVerticalOffset={-100}
          behavior={'padding'}
          style={[formStyle, styles.bottom]}
        >
          {(visibleForm === 'SIGNUP') && (
            <SignupForm
              ref={(ref) => this.formRef = ref}
              onLoginLinkPress={this._handleLoginLinkPress}
              onSignupPress={signup}
              isLoading={isLoading}
            />
          )}
          {(visibleForm === 'LOGIN') && (
            <LoginForm
              ref={(ref) => this.formRef = ref}
              onSignupLinkPress={this._handleSignupLinkPress}
              onLoginPress={login}
              isLoading={isLoading}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    height: metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    // justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 40
  },
  bottom: {
    // flex: 1,
    backgroundColor: '#1976D2'
    // marginTop: 200
  }
})
