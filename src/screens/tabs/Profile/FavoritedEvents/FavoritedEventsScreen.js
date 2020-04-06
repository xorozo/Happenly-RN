import React from 'react';
import { SafeAreaView, FlatList, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import Colors from '../../../../constants/Colors';
import appStyles from '../../../../styles/app-style';
import EventCard from '../../../../components/EventCard';

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

class FavoritedEventsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
              <FlatList 
                style={{flex: 1, padding: 5, paddingTop: 10, paddingBottom: 30}} 
                data={DATA} 
                renderItem={({item, index, separators}) => ( 
                  <TouchableOpacity 
                    style={{padding: 5}} 
                    onPress={() => this.props.navigation.navigate('EventDetail')} 
                  >
                    <EventCard name={item.name} place={item.place} open_at={item.open_at} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id} 
              />
            </ScrollView>
            <TouchableOpacity
              style={{position: 'absolute', right: 5, bottom: 5}} 
              onPress={() => this.props.navigation.navigate('SearchOnMap')} 
            >
              <Image 
                source={require('../../../../../assets/images/icons/circle-plus-red.png')} 
                style={{width: 60, height: 60}} 
              />
            </TouchableOpacity>
          </SafeAreaView>
        );
    }

}

export default FavoritedEventsScreen;