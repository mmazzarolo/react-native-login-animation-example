## A simple demo of a login/signup animation built with react-native


### Description
A simple demo of a login/signup animation built with react-native. 
You can see a small clip of the animation in action [on this Youtube link](https://www.youtube.com/watch?v=D67-hAj9LBQ).
This repository contains the source code used to run the animation. 

### Project structure 
The structure of the application is the following:
```javascript
src
 ├── index.js // The app entry point (here I also handle routing and state)
 │
 ├── components
 │   ├── CustomButton.js // The button used in the app
 │   ├── CustomTextInput.js // The text input used in the app
 │   └── TouchableView.js // A cross-platform helper view with a touchable behavior
 │
 ├── config
 │   ├── metrics.js // App metrics like device width/height, statusbar height, etc...
 │   └── product.js
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
