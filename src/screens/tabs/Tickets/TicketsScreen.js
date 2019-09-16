import React from 'react';
import { SafeAreaView, FlatList, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import appStyles from '../../../styles/app-style';
// import styles from './style';
import EventItem from '../../../components/EventItem';

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

class TicketsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  static navigationOptions = {
    title: 'Tickets',
    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
  }

  // === === //
    render() {
        return (
            <SafeAreaView style={appStyles.container}>
              <FlatList 
                style={appStyles.w_100} 
                data={DATA} 
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.onPress(item)} 
                  >
                    <EventItem name={item.name} place={item.place} open_at={item.open_at} />
                  </TouchableOpacity>
                )} 
                keyExtractor={item => item.id} 
              />
            </SafeAreaView>
        );
    }

  onPress = (item) => {
    Alert.alert(item.name);
  }
}

export default TicketsScreen;