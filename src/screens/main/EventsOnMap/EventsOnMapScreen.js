import React from 'react';
import { SafeAreaView, ImageBackground, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet, Dimensions, FlatList } from 'react-native';
import appStyles from '../../../styles/app-style';
import MapView from 'react-native-maps';
import EventCard from '../../../components/EventCard';
import Carousel from 'react-native-snap-carousel';
import styles from './style';

class EventsOnMapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.bg_overlay} 
                source={require('../../../../assets/images/backgrounds/bg-map-overlay.png')}
            >
              <TouchableOpacity
                style={styles.close_button} 
                onPress={() => this.props.navigation.goBack()}
              >
                <Image 
                  style={styles.times_icon} 
                  source={require('../../../../assets/images/icons/times-white.png')}
                />
              </TouchableOpacity>
              <MapView
                style={{flex: 1}}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
              <View style={styles.carousel_container}>
                <Carousel
                  layout={'default'}
                  ref={(c) => { this._carousel = c; }}
                  data={DATA}
                  renderItem={({item, index}) => {
                      return (
                      <TouchableOpacity 
                          style={{paddingTop: 5, paddingBottom: 5}}
                          onPress={() => this.goEventDetailScreen()}
                      >
                          <EventCard size={'sm'} name={item.name} place={item.place} open_at={item.open_at} />
                      </TouchableOpacity>
                      );
                  }}
                  sliderWidth={Dimensions.get('window').width}
                  itemWidth={Dimensions.get('window').width - 60}
                  style={[appStyles.test_border, {borderColor: 'red'}]} 
                />
              </View>

            </ImageBackground>
            
          </SafeAreaView>
        );
    }
  
  // === === //
  goEventDetailScreen = () => {
    this.props.navigation.navigate('EventDetail');
  }

  goSearchOnMapScreen = () => {
    this.props.navigation.navigate('SearchOnMap');
  }
}

export default EventsOnMapScreen;

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