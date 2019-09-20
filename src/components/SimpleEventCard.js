import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';
import FavoriteButton from './FavoriteButton'
import AvatarGroup from './AvatarGroup';

export default function SimpleEventCard(props) {
  return (
    <View style={[styles.card_container, appStyles.light_shadow]}>
        <View style={styles.card_image_container}>
            <ImageBackground 
                style={[styles.card_image, {height: props.itemWidth && props.itemWidth * 0.6}]}
                source={require('../../assets/images/events/events0.png')} 
            >
                <FavoriteButton style={styles.favorite_button} />
            </ImageBackground>
        </View>
        <View style={[styles.item_container]}>
            <View style={{flex: 8}}>
                <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                    <Text style={[appStyles.font_bold, appStyles.font_md]}>{props.name}</Text>
                </View>
                <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                    <Text style={[appStyles.gray, appStyles.font_sm]}>Music∙Concerts∙Live Shows</Text>
                </View>
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
        marginLeft: 1.41, 
        marginRight: 1.41
    },
    card_image: {
        alignItems: 'flex-end',
    },
    favorite_button: {
        marginTop: 5,
        marginRight: 5,
        width: 40,
        height: 40,
        padding: 5,
    },
    heart_icon: {
        width: 30,
        height: 30,
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Colors.whiteColor,
    },
})