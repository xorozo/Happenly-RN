import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default function FriendItem(props) {
  return (
    <View style={styles.card_container}>
        <View style={styles.avatar_container}>
            <Image 
                source={require('../../assets/images/avatars/avatar-f.png')} 
                style={styles.avatar}/>
        </View>
        <View style={styles.content_container}>
            <View style={styles.profile_info}>
                <Text style={[{padding: 3}, props.nameStyle]}>{props.name}</Text>
                <Text style={[appStyles.gray, {padding: 3}]}>{props.address}</Text>
            </View>
            <View style={styles.action_container}>
                {/* <Text style={{alignItems: 'flex-end', color: Colors.pinkColor}}>On Tour</Text> */}
                {props.buttonTitle && 
                    <TouchableOpacity
                        style={props.buttonStyle}
                    >
                        <Text style={props.buttonTitleStyle}>{props.buttonTitle}</Text>
                    </TouchableOpacity>}
                {props.secondButtonTitle && 
                    <TouchableOpacity
                        style={props.secondButtonStyle}
                    >
                        <Text style={props.secondButtonTitleStyle}>{props.secondButtonTitle}</Text>
                    </TouchableOpacity>}
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
    avatar_container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: Colors.pinkColor,
        borderWidth: 1,
    },
    content_container: {
        flex: 1,
        flexDirection: 'row',
    },
    profile_info: {
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'center',
    },
    action_container: {
        marginLeft: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 5,
    },
})