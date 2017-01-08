# A React-Native login animation example

## Description
This is a simple demo of a login/signup animation built with react-native, inspired by [the Dropbox Material Redesign Concept by Sam Atmore](https://dribbble.com/shots/2456987-Dropbox-Material-Redesign-Concept).  
This repository contains the source code used to run the animation.   
The example is available in Exponent too: https://getexponent.com/@community/login-animation-example

## Gif and vid!
<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-login-animation-example/master/extras/low-quality-app-intro.gif"></img>  
</p>
  
<p align="center">
You can also see the animation in a much better quality <a href="https://www.youtube.com/watch?v=D67-hAj9LBQ">on this Youtube link</a>.
</p>

## Project structure 
The structure of the application is the following:
```javascript
src
 ├── app.js // The app entry point (for sake of simplicity I handle here the routing and the state)
 │
 ├── components
 │   ├── CustomButton.js // The button used in the app
 │   ├── CustomTextInput.js // The text input used in the app
 │   └── TouchableView.js // A cross-platform helper view with a touchable behavior
 │
 ├── config
 │   └── metrics.js // App metrics like device width/height, statusbar height, etc...
 │
 ├── containers
 │   ├── AuthScreen
 │   │   ├── index.js // The signup/login screen
 │   │   ├── LoginForm.js // The login form
 │   │   ├── Opening.js // The initial buttons (that redirect to login/signup)
 │   │   └── SignupForm.js // The signup form
 │   └── HomeScreen.js
 │       └── index.js // The post-authentication screen (for this example I simply show a logout button)
 │
 └── images // The app images
```

## Dependencies
The dependencies needed for this app are the following:
```javascript
"react-native" >= "0.38.0",
"react-native-animatable" >= "1.1.0"
```

## Some visual cues on the app structure
<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-login-animation-example/master/extras/Schermata%202017-01-02%20alle%2012.58.15.png"></img>  
</p>
  
<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-login-animation-example/master/extras/Schermata%202017-01-02%20alle%2012.59.33.png"></img>  
</p>
  
<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-login-animation-example/master/extras/Schermata%202017-01-02%20alle%2012.59.48.png"></img>  
</p>

## Animations info and app flow description
Most of the app flow is described inside [src/app.js](https://github.com/mmazzarolo/react-native-login-animation-example/blob/master/src/app.js) and [src/containers/AuthScreen/index.js](https://github.com/mmazzarolo/react-native-login-animation-example/blob/master/src/containers/AuthScreen/index.js).  
Feel free to open an issue if something is not clear enough! :fish:  
