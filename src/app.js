import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import AuthScreen from './containers/AuthScreen'
import HomeScreen from './containers/HomeScreen'

export class LoginAnimation extends Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    isAppReady: false
  }

  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      if (username === 'testtest' && password === 'testtest') {
        this.setState({ isLoggedIn: true, isLoading: false })
      }
    }, 400)
  }

  _simulateSignup = (username, password, fullName) => {
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 400)
  }

  _renderContent = () => {
    if (this.state.isAppReady) {
      return <HomeScreen onLogout={() => this.setState({ isLoggedIn: false, isAppReady: false })} />
    } else {
      return (
        <AuthScreen
          login={this._simulateLogin}
          signup={this._simulateSignup}
          isLoggedIn={this.state.isLoggedIn}
          isLoading={this.state.isLoading}
          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
        />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this._renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default LoginAnimation
