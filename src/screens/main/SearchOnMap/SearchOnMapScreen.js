import React from 'react';
import { SafeAreaView, TextInput, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet, Dimensions, FlatList } from 'react-native';
import appStyles from '../../../styles/app-style';
import MapView, { Marker } from 'react-native-maps';
import styles from './style';
import Colors from '../../../constants/Colors';
import EventItem from '../../../components/EventItem';
import ToggleButton from '../../../components/ToggleButton';

const CATEGORIES = [
  {
    id: 0,
    name: 'EVENTS'
  },
  {
    id: 1,
    name: 'VENUES'
  },
  {
    id: 2,
    name: 'USERS'
  }
];

const DOWN_ARROW_ICON = '../../../../assets/images/icons/down-arrow.png';
const UP_ARROW_ICON = '../../../../assets/images/icons/up-arrow.png';

class SearchOnMapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories_class: [true, false, true], 
    }
  }

  _toggleHideResult = () => {
    let _h_max = Dimensions.get('window').height * 0.35;
    let _h = this.state.result_height ? this.state.result_height : _h_max;
    if(_h == _h_max) {
      this.setState({
        result_height: 22,
        angle: '180deg'
      });
    } else {
      this.setState({
        result_height: _h_max,
        angle: '0deg'
      });
    }
  }

  // === === //
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.search_container}>
              <View style={styles.search_input_container}>
                <Image 
                  source={require('../../../../assets/images/icons/search0.png')}
                  style={styles.search_icon} 
                />
                <TextInput 
                  style={styles.search_input} 
                  placeholder='Search' 
                  placeholderTextColor={Colors.grayColor} 
                />
              </View>
              <FlatList 
                style={styles.category_container} 
                horizontal={true} 
                data={CATEGORIES} 
                renderItem={({item}) => (
                  <ToggleButton item={item} />
                )}
                keyExtractor={item => item.id.toString()} 
              />
            </View>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: global.my_location.latitude,
                longitude: global.my_location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker 
                coordinate={global.my_location} 
                image={require('../../../../assets/images/icons/marker-red.png')} 
              />
            </MapView>
            <View style={[styles.results_container, this.state.result_height && {height: this.state.result_height}]}>
              <View style={styles.events_list_card}>
                <View style={styles.toggle_hide_button_container}>
                  <TouchableOpacity
                    style={styles.toggle_hide_button}
                    onPress={() => this._toggleHideResult()}
                  >
                    <Image 
                      source={require(DOWN_ARROW_ICON)} 
                      style={[styles.down_arrow_icon, this.state.angle && { transform: [{rotate : this.state.angle}] }]}
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  style={styles.events_list} 
                  data={DATA} 
                  renderItem={({item}) => (
                    <EventItem name={item.name} place={item.place} open_at={item.open_at} />
                  )}
                  keyExtractor={item => item.id.toString()} 
                />
              </View>
            </View>
          </SafeAreaView>
        );
    }
  
  // === === //
  goEventDetailScreen = () => {
    this.props.navigation.navigate('EventDetail');
  }

  toggleCategory = (item) => {
    let arr = this.state.categories_class;
    for(let i=0; i<CATEGORIES.length; i++) {
      if (i == item.id) {
        arr[i] = !arr[i];
      }
    }
    this.setState({categories_class: arr});
  }
}

export default SearchOnMapScreen;

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