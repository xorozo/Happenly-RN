import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';
import AvatarGroup from './AvatarGroup';

export default function EventCard(props) {
  return (
    <View style={[styles.card_container, appStyles.shadow]}>
        <View style={styles.card_image_container}>
            <ImageBackground 
                style={[styles.card_image, {height: 220}]}
                source={require('../../assets/images/events/events0.png')} 
            >
                <TouchableOpacity
                    style={styles.favorite_button}
                >
                    <Image 
                        source={require('../../assets/images/icons/heart-white.png')} 
                        style={styles.heart_icon}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={styles.item_container}>
            <View style={{flex: 8}}>
                <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                    <Text style={[appStyles.font_lg, appStyles.font_bold]}>{props.name}</Text>
                </View>
                <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                    <View>
                        <Text style={[appStyles.font_md, appStyles.gray]}>Music∙Concerts∙Live Shows</Text>
                    </View>
                </View>
                <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                    <View>
                        <Image 
                            source={require('../../assets/images/icons/location-gray.png')} 
                            style={styles.item_location_icon}
                        />
                    </View>
                    <View>
                        <Text style={[appStyles.font_md, appStyles.gray]}>3.4km - {props.place}</Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 2, alignItems: 'flex-end'}}>
                <View style={styles.event_date}>
                    <Text style={appStyles.white}>{props.open_at}</Text>
                </View>
            </View>
        </View>
        <View style={styles.card_divider_container}>
            <Image 
                source={require('../../assets/images/icons/dot-line.png')} 
                style={[styles.card_divider]}/>
        </View>
        <View style={styles.item_footer_container}>
            <View style={[appStyles.row_container, {flex: 1, justifyContent: 'flex-start'}]}>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <Text style={appStyles.pink}>$20</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Image 
                        source={require('../../assets/images/icons/emoticon-smile.png')} 
                        style={styles.emoticon_smile} 
                    />
                    <Text style={appStyles.gray}> 4.6 </Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 15}}>
                <AvatarGroup />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card_container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 15,
        overflow: 'hidden',
    },
    card_image_container: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        marginLeft: 2.62, 
        marginRight: 2.62
    },
    card_image: {
        alignItems: 'flex-end',
    },
    favorite_button: {
        marginTop: 10,
        marginRight: 10,
    },
    heart_icon: {
        width: 30,
        height: 30,
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingRight: 0,
    },
    event_date: {
        backgroundColor: Colors.airForceBlueColor,
        marginRight: 2.62,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    item_location_icon: {
        width: 15,
        height: 15,
    },
    card_divider_container: {
        paddingLeft: 5,
        marginRight: 20,
    },
    card_divider: {
        height: 1,
        resizeMode: 'repeat',
    },
    item_footer_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
    },
    emoticon_smile: {
        width: 18,
        height: 18,
    },
})