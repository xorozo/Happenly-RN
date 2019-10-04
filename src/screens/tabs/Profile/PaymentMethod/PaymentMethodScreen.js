import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import Colors from '../../../../constants/Colors';
import appStyles from '../../../../styles/app-style';
import styles from './style';

class PaymentMethodScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <KeyboardAvoidingView style={appStyles.container}
              behavior='padding' 
              enabled 
            >
              <ScrollView style={appStyles.w_100}>
                <View>
                  <Text>Comming soon!</Text>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
        );
    }

  editProfile = () => {
    Alert.alert('You clicked Edit Profile');
  }

  goNextEvent = () => {
    Alert.alert('You clicked NEXT EVENT');
  }

  showAllEvents = () => {
    Alert.alert('Show all events');
  }

  goMyPlaces = () => {
    Alert.alert('Show all events');
  }
}

export default PaymentMethodScreen;