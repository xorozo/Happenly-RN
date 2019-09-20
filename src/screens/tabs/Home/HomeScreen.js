import React from 'react';
import { SafeAreaView, ScrollView, FlatList, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import HeroImageSlider from '../../../components/HeroImageSlider';
import EventCard from '../../../components/EventCard';
import appStyles from '../../../styles/app-style';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../../constants/Colors';
// import styles from './style';

const DATA = [
  {
    id: '1',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '2',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '3',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '4',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '5',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '6',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '7',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  },
  {
    id: '8',
    name: 'Muse Simulation Theory Tour',
    place: 'A2 Green Concert Hall',
    open_at: '24 JUN'
  }
];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // === === //
    render() {
        return (
            <SafeAreaView style={appStyles.container}>
              <ScrollView>
                <TouchableOpacity
                  style={styles.location_button} 
                  onPress={() => this.goSearchOnMapScreen()}
                >
                  <Image 
                    source={require('../../../../assets/images/icons/location-white.png')} 
                    style={styles.location_icon}
                  />
                </TouchableOpacity>
                <HeroImageSlider />
                <View style={[appStyles.row_container, styles.search_box]}>
                  <View style={styles.bg_overlay} />
                  <View style={styles.search_form}>
                    <Image 
                      source={require('../../../../assets/images/icons/search0.png')} 
                      style={styles.search_icon} 
                    />
                    <TextInput 
                      placeholder={'Search'}
                      placeholderTextColor={Colors.grayColor} 
                      maxLength={40} 
                      style={styles.search_input} 
                    />
                  </View>
                </View>
                <FlatList 
                  style={{paddingTop: 10, paddingBottom: 10}} 
                  data={DATA} 
                  renderItem={({item, index, separators}) => ( 
                    <TouchableOpacity 
                      style={{padding: 10}} 
                      onPress={() => this.goEventDetailScreen()}
                    >
                      <EventCard name={item.name} place={item.place} open_at={item.open_at} />
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id} 
                />
              </ScrollView>
            </SafeAreaView>
        );
    }

  // === === //
  goSearchOnMapScreen = () => {
    this.props.navigation.navigate('SearchOnMap');
  }

  goEventDetailScreen = () => {
    this.props.navigation.navigate('EventDetail');
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  location_button: {
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
  },
  location_icon: {
    width: 25,
    height: 25,
  },
  search_box: {
    justifyContent: 'flex-start',
    marginTop: -55,
    marginBottom: 5,
  },
  bg_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.blackColor,
    opacity: 0.57,
  },
  search_form: {
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  search_icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 20,
  },
  search_input: {
    width: '100%',
    color: Colors.whiteColor,
    fontSize: 18,
    paddingLeft: 40,
    paddingRight: 20,
  }
});