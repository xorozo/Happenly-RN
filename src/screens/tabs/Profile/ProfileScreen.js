import React from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import appStyles from '../../../styles/app-style';
// import styles from './style';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <View style={appStyles.container}>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}

export default ProfileScreen;