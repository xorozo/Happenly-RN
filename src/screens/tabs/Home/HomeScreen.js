import React from 'react';
import { SafeAreaView, ScrollView, FlatList, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import HeroImageSlider from '../../../components/HeroImageSlider';
import EventCard from '../../../components/EventCard';
import appStyles from '../../../styles/app-style';
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
                <HeroImageSlider />
                <FlatList 
                  style={{paddingTop: 10, paddingBottom: 10}} 
                  data={DATA} 
                  renderItem={({item, index, separators}) => ( 
                    <TouchableOpacity 
                      style={{padding: 10}} 
                      onPress={() => Alert.alert('clicked card')}
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
}

export default HomeScreen;