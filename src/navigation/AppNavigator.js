import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/loading/LoadingScreen';
import AuthNavigator from './AuthNavigator';
import MainAppNavigator from './MainAppNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Loading: LoadingScreen,
    Auth: AuthNavigator,
    App: MainAppNavigator,
  },{
    initialRouteName: 'Loading',
  })
);
