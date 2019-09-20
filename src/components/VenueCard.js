import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default function VenueCard(props) {
  return (
    <View style={styles.card_container}>
        <View style={styles.venue_image_container}>
            <Image 
                source={require('../../assets/images/avatars/avatar-f.png')} 
                style={styles.venue_image}/>
        </View>
        <View style={styles.content_container}>
            <View style={styles.profile_info}>
                <Text style={[appStyles.font_bold, {padding: 3}]}>{props.name}</Text>
                <Text style={[appStyles.gray, {padding: 3}]}>{props.name}</Text>
            </View>
            <View style={styles.action_container}>
                <Text style={{alignItems: 'flex-end', color: Colors.pinkColor}}>On Tour</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
    },
    venue_image_container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    venue_image: {
        width: 70,
        height: 60,
        borderRadius: 10,
        borderColor: Colors.blackMarlinColor,
        borderWidth: 1,
    },
    content_container: {
        flexDirection: 'row',
    },
    profile_info: {
        padding: 5,
        justifyContent: 'center',
    },
    action_container: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 5,
    },
})