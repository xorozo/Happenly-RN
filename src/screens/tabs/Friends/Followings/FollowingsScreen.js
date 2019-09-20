import React from 'react';
import { SafeAreaView, Image, Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import appStyles from '../../../../styles/app-style';
import Colors from '../../../../constants/Colors';
import FriendItem from '../../../../components/FriendItem';


const DATA = [
  {
    id: '1',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '2',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '3',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '4',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '5',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '6',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '7',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  },
  {
    id: '8',
    name: 'Alex Krol',
    address: 'A2 Green Concert Hall',
  }
];

class FollowingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.search_box}>
          <View style={styles.search_form}>
            <Image 
              source={require('../../../../../assets/images/icons/search0.png')} 
              style={styles.search_icon} 
            />
            <TextInput 
              style={styles.search_input}
            />
          </View>
        </View>
        <FlatList 
          style={{flex: 1}} 
          data={DATA} 
          renderItem={({item, index, separators}) => ( 
            <TouchableOpacity 
              style={{borderColor: Colors.lightGrayColor, borderBottomWidth: 1}} 
              onPress={() => this.props.navigation.navigate('EventDetail')} 
            >
              <FriendItem 
                name={item.name}
                nameStyle={[appStyles.font_bold]} 
                address={item.address} 
                buttonTitle={'Follow'} 
                buttonTitleStyle={{color: Colors.pinkColor}} 
                buttonStyle={{borderColor: Colors.pinkColor, borderWidth: 1, borderRadius: 3, padding: 2, paddingLeft: 5, paddingRight: 5}} 
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id} 
        />
      </SafeAreaView>
    );
  }
}

export default FollowingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search_box: {
    padding: 10,
    borderBottomColor: Colors.lightGrayColor,
    borderBottomWidth: 1,
  },
  search_form: {
    width: '100%',
    height: 35,
    backgroundColor: Colors.lightGrayColor,
    borderRadius: 5,
    justifyContent: 'center',
  },
  search_icon: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 5
  },
  search_input: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 20,
  },
})