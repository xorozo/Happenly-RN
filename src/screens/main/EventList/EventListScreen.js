import React from 'react';
import { SafeAreaView, FlatList, ScrollView, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../../constants/Colors';
import appStyles from '../../../styles/app-style';
import styles from './style';

import SimpleEventCard from '../../../components/SimpleEventCard';

const  EVENTS = [
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

class EventListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: 2,
    }
  }

  // === === //
    render() {
      const {columns} = this.state;
      const MAX_WIDTH = Dimensions.get('window').width;
      return (
          <ScrollView style={[appStyles.w_100, {paddingTop: 10, paddingBottom: 10}]}>
            <FlatList 
              style={{paddingBottom: 20, paddingTop: 10}}
              numColumns={columns}
              data={EVENTS} 
              renderItem={({item}) => (
                <TouchableOpacity 
                  style={[{padding: 10}, {width: (MAX_WIDTH -  0 * columns)/ columns}]} 
                  onPress={() => this.props.navigation.navigate('EventDetail')} 
                >
                  <SimpleEventCard itemWidth={MAX_WIDTH / columns} name={item.name} place={item.place} open_at={item.open_at} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
      );
    }
}

export default EventListScreen;