import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import EventDetailScreen from '../screens/main/EventDetail/EventDetailScreen';
import EventsOnMapScreen from '../screens/main/EventsOnMap/EventsOnMapScreen';
import SearchOnMapScreen from '../screens/main/SearchOnMap/SearchOnMapScreen';
// === Profile Tab === //
import ProfileEditScreen from '../screens/tabs/Profile/ProfileEdit/ProfileEditScreen';
import MyPlacesScreen from '../screens/tabs/Profile/MyPlaces/MyPlacesScreen';
import MyArtistsScreen from '../screens/tabs/Profile/MyArtists/MyArtistsScreen';
import FavoritedEventsScreen from '../screens/tabs/Profile/FavoritedEvents/FavoritedEventsScreen';
import PaymentMethodScreen from '../screens/tabs/Profile/PaymentMethod/PaymentMethodScreen';
import SettingsScreen from '../screens/tabs/Profile/Settings/SettingsScreen';
// --- Profile / Settings --- //
import TermsAndPoliciesScreen from '../screens/tabs/Profile/Settings/TermsAndPolicies/TermsAndPoliciesScreen';
import HelpScreen from '../screens/tabs/Profile/Settings/Help/HelpScreen';
import AboutUsScreen from '../screens/tabs/Profile/Settings/AboutUs/AboutUsScreen';


const noHeaderConfig = {
  header: null,
};

const MainAppNavigator = createStackNavigator({
  Tab: {
    screen: MainTabNavigator,
    navigationOptions: noHeaderConfig,
  },
  EventDetail: {
    screen: EventDetailScreen,
    navigationOptions: noHeaderConfig,
  },
  EventsOnMap: {
    screen: EventsOnMapScreen,
    navigationOptions: noHeaderConfig,
  },
  SearchOnMap: {
    screen: SearchOnMapScreen,
    navigationOptions: noHeaderConfig,
  },
  // === Profile Tab === //
  ProfileEdit: {
    screen: ProfileEditScreen,
    navigationOptions: noHeaderConfig,
  },
  MyPlaces: {
    screen: MyPlacesScreen,
    navigationOptions: {
      title: 'My Places',
    }
  },
  MyArtists: {
    screen: MyArtistsScreen,
    navigationOptions: {
      title: 'My Artists',
    }
  },
  FavoritedEvents: {
    screen: FavoritedEventsScreen,
    navigationOptions: {
      title: 'Favorited Events',
    }
  },
  PaymentMethod: {screen: PaymentMethodScreen},
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
    }
  },
  // --- Profile / Settings --- //
  TermsAndPolicies: {
    screen: TermsAndPoliciesScreen,
    navigationOptions: {
      title: 'Terms & Policies',
    }
  },
  Help: {
    screen: HelpScreen,
    navigationOptions: {
      title: 'Help',
    }
  },
  AboutUs: {
    screen: AboutUsScreen,
    navigationOptions: {
      title: 'About Us',
    }
  },
},{
  initialRouteName: 'Tab',
  mode: 'modal',
  headerMode: 'screen',
})

export default MainAppNavigator;
