import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import EventDetailScreen from '../screens/main/EventDetail/EventDetailScreen';
import EventsOnMapScreen from '../screens/main/EventsOnMap/EventsOnMapScreen';
import SearchOnMapScreen from '../screens/main/SearchOnMap/SearchOnMapScreen';

const MainAppNavigator = createStackNavigator({
  Tab: MainTabNavigator,
  EventDetail: {screen: EventDetailScreen},
  EventsOnMap: {screen: EventsOnMapScreen},
  SearchOnMap: {screen: SearchOnMapScreen},
},{
  // initialRouteName: 'SearchOnMap',
  headerMode: 'none',
})

export default MainAppNavigator;
