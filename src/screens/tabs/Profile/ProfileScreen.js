import React from 'react';
import { ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
import Colors from '../../../constants/Colors';
import appStyles from '../../../styles/app-style';
import styles from './style';

import EventItem from '../../../components/EventItem';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <View style={appStyles.container}>
              <ImageBackground 
                source={require('../../../../assets/images/backgrounds/bg-profile.png')} 
                style={[appStyles.col_container, {flex: 2}]}>
                <View style={[appStyles.col_container, {flex: 2}]}>
                  <TouchableOpacity
                    style={styles.edit_button}
                    onPress={() => this.editProfile()}
                  >
                    <Image 
                      source={require('../../../../assets/images/icons/pencil.png')} 
                      style={styles.edit_icon}
                    />
                  </TouchableOpacity>
                  <View style={{flex: 1}}>
                    <Image style={styles.avatar} 
                      source={require('../../../../assets/images/avatars/avatar-f.png')} 
                    />
                  </View>
                </View>
                <View style={[appStyles.col_container, {flex: 1}]}>
                  <View style={appStyles.col_container}>
                    <Text style={[appStyles.white, appStyles.font_md]}>Francisco D'Ankonia</Text>
                  </View>
                  <View style={appStyles.row_container}>
                    <View style={appStyles.row_container}>
                      <Text style={[appStyles.white, appStyles.font_lg]}>4 Followers</Text>
                    </View>
                    <View style={appStyles.row_container}>
                      <Text style={[appStyles.white, appStyles.font_lg]}>2 Following</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View style={[appStyles.col_container, {flex: 3}]}>
                <ScrollView style={[appStyles.w_100, {flex: 1}]}>
                  <TouchableOpacity
                    style={{width: 110}}
                    onPress={() => this.goNextEvent()}
                  >
                    <Text style={[appStyles.gray, appStyles.font_md, {paddingLeft: 10, paddingTop: 10}]} >NEXT EVENT</Text>
                  </TouchableOpacity>
                  <EventItem 
                    name='Muse Simulation Theory Tour' 
                    place='A2 Green Concert Hall' 
                    open_at='24 JUN' 
                  />
                  <TouchableOpacity 
                    style={{width: 90}}
                    onPress={() => this.showAllEvents()}
                  >
                    <Text style={[appStyles.pink, appStyles.font_md, {padding: 10}]} >All Events</Text>
                  </TouchableOpacity>
                  <View style={[appStyles.col_container, {alignItems: 'flex-start', paddingTop: 20, paddingBottom: 20}]}>
                    <TouchableOpacity
                      style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                      onPress={() => this.goMyPlaces()}
                    >
                      <Text 
                        style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlin}]}
                      >My Places</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/right-arrow.png')} 
                        style={styles.right_arrow}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                      onPress={() => this.goMyPlaces()}
                    >
                      <Text 
                        style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlin}]}
                      >My Artists</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/right-arrow.png')} 
                        style={styles.right_arrow}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                      onPress={() => this.goMyPlaces()}
                    >
                      <Text 
                        style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlin}]}
                      >Favorited Events</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/right-arrow.png')} 
                        style={styles.right_arrow}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                      onPress={() => this.goMyPlaces()}
                    >
                      <Text 
                        style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlin}]}
                      >Payment Method</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/right-arrow.png')} 
                        style={styles.right_arrow}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                      onPress={() => this.goMyPlaces()}
                    >
                      <Text 
                        style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlin}]}
                      >Settings</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/right-arrow.png')} 
                        style={styles.right_arrow}
                      />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
        );
    }

  editProfile = () => {
    Alert.alert('You clicked Edit Profile');
  }

  goNextEvent = () => {
    Alert.alert('You clicked NEXT EVENT');
  }

  showAllEvents = () => {
    Alert.alert('Show all events');
  }

  goMyPlaces = () => {
    Alert.alert('Show all events');
  }
}

export default ProfileScreen;