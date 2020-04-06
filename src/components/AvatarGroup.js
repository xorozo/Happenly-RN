import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

const DATA = [
    require('../../assets/images/avatars/avatar-f.png'),
    require('../../assets/images/avatars/avatar-f.png'),
    require('../../assets/images/avatars/avatar-f.png'),
    require('../../assets/images/avatars/avatar-f.png'),
    require('../../assets/images/avatars/avatar-f.png')
];

export default function AvatarGroup(props) {
  return (
    <View style={styles.group_container}>
        <Text style={[appStyles.gray, {alignSelf: 'center'}]}>{DATA.length}</Text>
        <View style={styles.avatars}>
            {DATA.map((item, index) => {
                if(index < 3) {
                    return (
                        <Image 
                            key={index} 
                            source={item} 
                            style={[styles.avatar, {zIndex: (10 - index)}]} 
                        />
                    );
                }
            })}
        </View>
        {/* <Text style={[styles.avatar_more, DATA.length < 4 && appStyles.hidden]}>+</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    group_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 5,
    },
    avatars: {
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        marginRight: -15,
        borderRadius: 15,
        borderColor: Colors.whiteColor,
        borderWidth: 2,
    },
    avatar_more: {
        color: Colors.grayColor,
        alignSelf: 'center',
    },
})