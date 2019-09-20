import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default function EventItem(props) {
  return (
    <View style={styles.item_container}>
        <View style={{flex: 8}}>
            <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                <Text style={[appStyles.font_lg, appStyles.font_bold, {color: Colors.blackMarlinColor}]}>{props.name}</Text>
            </View>
            <View style={[appStyles.row_container, {justifyContent: 'flex-start'}]}>
                <View>
                    <Text style={[appStyles.font_md, appStyles.gray]}>{props.place}</Text>
                </View>
                <View>
                    <Text style={[appStyles.pink, appStyles.font_md, {marginLeft: 10}]}>In 2 Days</Text>
                </View>
            </View>
        </View>
        <View style={{flex: 2, alignItems: 'flex-end'}}>
            <View style={styles.event_date}>
                <Text style={appStyles.white}>{props.open_at}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingRight: 5,
        backgroundColor: Colors.whiteColor,
    },
    event_date: {
        backgroundColor: Colors.airForceBlueColor,
        paddingTop: 3,
        paddingBottom: 3,
        paddingRight: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
})