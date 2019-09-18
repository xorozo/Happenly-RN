import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import EventDetailScreen from '../screens/main/EventDetail/EventDetailScreen';

const MainAppNavigator = createStackNavigator({
  Tab: MainTabNavigator,
  EventDetail: {screen: EventDetailScreen},
},{
//   initialRouteName: '',
  headerMode: 'none',
})

export default MainAppNavigator;
