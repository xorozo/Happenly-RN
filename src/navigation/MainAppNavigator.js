import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import EventDetailScreen from '../screens/main/EventDetail/EventDetailScreen';
import EventsOnMapScreen from '../screens/main/EventsOnMap/EventsOnMapScreen';
import SearchOnMapScreen from '../screens/main/SearchOnMap/SearchOnMapScreen';
import EventListScreen from '../screens/main/EventList/EventListScreen';
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
  EventList: {
    screen: EventListScreen,
    navigationOptions: {
      title: 'All Events',
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    },
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
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    }
  },
  MyArtists: {
    screen: MyArtistsScreen,
    navigationOptions: {
      title: 'My Artists',
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    }
  },
  FavoritedEvents: {
    screen: FavoritedEventsScreen,
    navigationOptions: {
      title: 'Favorited Events',
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    }
  },
  PaymentMethod: {
    screen: PaymentMethodScreen,
    navigationOptions: {
      title: 'Payment Method',
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
    }
  },
    // --- Profile / Settings --- //
    TermsAndPolicies: {
      screen: TermsAndPoliciesScreen,
      navigationOptions: {
        title: 'Terms & Policies',
        headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
      }
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        title: 'Help',
        headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
      }
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        title: 'About Us',
        headerLayoutPreset: 'center',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        // flex: 1,
      },
      }
    },
},{
  initialRouteName: 'Tab',
  mode: 'modal',
  headerMode: 'screen',
})

export default MainAppNavigator;
