# A React-Native login animation example

## Gif and vid!
<p align="center">
<img src="https://raw.githubusercontent.com/mmazzarolo/react-native-login-animation-example/master/extras/low-quality-app-intro.gif"></img>  
</p>
  
<p align="center">
You can also see the animation in action <a href="https://www.youtube.com/watch?v=D67-hAj9LBQ">on this Youtube link</a>.
</p>



## Description
This is a simple demo of a login/signup animation built with react-native. 
This repository contains the source code used to run the animation. 

## Project structure 
The structure of the application is the following:
```javascript
src
 ├── app.js // The app entry point (here I also handle routing and state)
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
"react-native" >= "0.39.2",
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
