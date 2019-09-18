import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, Dimensions, Button } from 'react-native';
import Colors from '../../../constants/Colors';
import appStyles from '../../../styles/app-style';
import styles from './style';

import EventItem from '../../../components/EventItem';
import { NavigationActions } from 'react-navigation';

class EventDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <SafeAreaView style={appStyles.container}>
              <ScrollView style={[appStyles.w_100, {flex: 1}]}>
                <ImageBackground 
                  source={require('../../../../assets/images/events/events1.png')} 
                  style={[appStyles.col_container, {height: Dimensions.get('window').width * 0.65}]}>
                  <View style={[appStyles.col_container, {flex: 2}]}>
                    <TouchableOpacity
                      style={styles.back_button}
                      onPress={() => this.goBack()}
                    >
                      <Image 
                        source={require('../../../../assets/images/icons/arrow-left.png')} 
                        style={styles.arrow_left_icon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.info_button}
                      onPress={() => this.editProfile()}
                    >
                      <Image 
                        source={require('../../../../assets/images/icons/info-white.png')} 
                        style={styles.info_icon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View style={[appStyles.col_container, {alignItems: 'flex-start'}]}>
                    <EventItem 
                      name='Muse Simulation Theory Tour' 
                      place='A2 Green Concert Hall' 
                      open_at='24 JUN' 
                    />
                    <View style={[appStyles.col_container, {alignItems: 'flex-start', width: '80%', paddingLeft: 10, paddingTop: 20, paddingBottom: 20}]}>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                      <Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>
                    </View>
                    <View>
                      <View style={{paddingLeft: 10, marginTop:5}}>
                        <Text style={[appStyles.font_md, appStyles.gray]}>VENUE</Text>
                      </View>
                      <View style={{padding: 10, flexDirection: 'row'}}>
                        <View>
                          <Image 
                            source={require('../../../../assets/images/avatars/avatar-f.png')} 
                            style={styles.venue_image} 
                          />
                        </View>
                        <View style={{paddingLeft:10, paddingTop: 5, paddingBottom: 10}}>
                          <Text style={[appStyles.font_md, {flex: 1}]}>BSA Luzhniki</Text>
                          <Text style={[appStyles.font_sm, appStyles.gray, {flex: 1}]}>Luzhniki str.24</Text>
                        </View>
                      </View>
                    </View>
                </View>
              </ScrollView>
              <View style={styles.footer}>
                <View style={{flex: 1}}>
                  <Text style={appStyles.pink}>$50</Text>
                  <Text style={[appStyles.black, appStyles.font_bold]}>2 tickets max</Text>
                </View>
                <View style={{flex: 1}}>
                  <Button 
                    title='Book a Ticket' 
                    color={Colors.pinkColor}
                    onPress={() => Alert.alert('click Booking Ticket')} 
                  />
                </View>
              </View>
            </SafeAreaView>
        );
    }

  editProfile = () => {
    Alert.alert('You clicked Edit Profile');
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  showAllEvents = () => {
    Alert.alert('Show all events');
  }

  goMyPlaces = () => {
    Alert.alert('Show all events');
  }
}

export default EventDetailScreen;