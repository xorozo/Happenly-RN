import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import SignInScreen from '../screens/auth/SignIn/SignInScreen';
import SignUpScreen from '../screens/auth/SignUp/SignUpScreen';

const AuthNavigator = createStackNavigator({
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
},{
  initialRouteName: 'SignIn',
  headerMode: 'none',
})

export default AuthNavigator;
