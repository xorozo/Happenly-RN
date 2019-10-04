import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Colors from '../../../constants/Colors';

import AllFriendsScreen from './AllFriends/AllFriendsScreen';
import FollowersScreen from './Followers/FollowersScreen';
import FollowingsScreen from './Followings/FollowingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'screen' },
});

const noneHeaderConfig = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'none' },
});

const AllFriendsStack = createStackNavigator(
  {
    AllFriends: AllFriendsScreen,
  },
  noneHeaderConfig
);

  AllFriendsStack.navigationOptions = {
    tabBarLabel: 'All Friends',
  };

  AllFriendsStack.path = '';

const FollowersStack = createStackNavigator(
  {
    Followers: FollowersScreen,
  },
  noneHeaderConfig
);

  FollowersStack.navigationOptions = {
    tabBarLabel: 'Followers',
  };

  FollowersStack.path = '';

const FollowingsStack = createStackNavigator(
  {
    Followings: FollowingsScreen,
  },
  noneHeaderConfig
);

  FollowingsStack.navigationOptions = {
    // swipEnabled: true,
    tabBarLabel: 'Followings',
  };

  FollowingsStack.path = '';

const FriendsStack = createMaterialTopTabNavigator({
  AllFriendsStack,
  FollowersStack,
  FollowingsStack,
}, {
  tabBarOptions: {
    initialRouteName: 'AllFriendsStack',
    inactiveTintColor: Colors.blackColor,
    activeTintColor: Colors.pinkColor,
    upperCaseLabel: false,
    style: {
      backgroundColor: Colors.lightGrayColor,
      borderTopWidth: 0,
      borderTopColor: Colors.pinkColor,
      height: 45,
    },
    indicatorStyle: {
      backgroundColor: Colors.pinkColor,
    },
  }
});

const FriendsNavigator = createAppContainer(FriendsStack);

class FriendsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <FriendsNavigator />
        );
    }
}

export default FriendsScreen;