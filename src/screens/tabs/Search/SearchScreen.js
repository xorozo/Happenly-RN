import React from 'react';
import { SafeAreaView, ImageBackground, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet, Dimensions, FlatList } from 'react-native';
import appStyles from '../../../styles/app-style';
import { ScrollView } from 'react-native-gesture-handler';
// import styles from './style';
import HeroImageCarousel from '../../../components/HeroImageCarousel';
import EventCard from '../../../components/EventCard';
import Carousel from 'react-native-snap-carousel';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.location_button} 
                onPress={() => this.goSearchOnMapScreen()}
              >
                <Image 
                  style={styles.location_icon} 
                  source={require('../../../../assets/images/icons/location-tint.png')}
                />
              </TouchableOpacity>
              <View style={styles.header_title}>
                <Text style={[appStyles.black, appStyles.font_xl, appStyles.font_bold, {paddingRight: 10}]}>Explore</Text>
                <Text style={[appStyles.pink, appStyles.font_xl, appStyles.font_bold]}>Chicago IL</Text>
              </View>
            </View>
            <ScrollView>
              <View>
                <HeroImageCarousel />
              </View>
              <View>
                <View style={styles.sub_header}>
                  <Text style={[appStyles.gray, appStyles.font_lg, appStyles.font_bold]}>Top Shows this Month</Text>
                  <TouchableOpacity 
                    style={{marginLeft: 'auto'}}
                    onPress={() => Alert.alert('clicked SEE ALL')}
                  >
                    <Text style={[appStyles.pink, appStyles.font_md, appStyles.font_bold]}>SEE ALL</Text>
                  </TouchableOpacity>
                </View>
                <View>
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
                  />
                </View>
              </View>
              <View>
                <View style={styles.sub_header}>
                  <Text style={[appStyles.gray, appStyles.font_lg, appStyles.font_bold]}>Happenly Choice</Text>
                </View>
                <FlatList 
                  style={{paddingTop: 5, paddingBottom: 10}} 
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
              </View>
            </ScrollView>
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

export default SearchScreen;

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: 75,
    padding: 15,
    paddingBottom: 10,
    marginTop: 22,
  },
  header_title: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  location_button: {
    position: 'absolute',
    top: 18,
    right: 10,
    zIndex: 1,
  },
  location_icon: {
    width: 25,
    height: 25,
  },
  sub_header: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

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