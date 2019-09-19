import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import Colors from '../../../../constants/Colors';
import appStyles from '../../../../styles/app-style';
import styles from './style';

class MyArtistsScreen extends React.Component {
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
                <ImageBackground 
                  source={require('../../../../../assets/images/backgrounds/bg-profile.png')} 
                  style={styles.header}>
                  <View style={[appStyles.col_container, {flex: 2}]}>
                    <TouchableOpacity
                      style={styles.back_button}
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <Image 
                        source={require('../../../../../assets/images/icons/arrow-left.png')} 
                        style={styles.arrow_left_icon}
                      />
                    </TouchableOpacity>
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        style={styles.upload_avatar}
                        onPress={() => Alert.alert('Upload Photo!')} 
                      >
                        <Image style={styles.avatar} 
                          source={require('../../../../../assets/images/avatars/avatar-f.png')} 
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[appStyles.col_container, {flex: 1}]}>
                    <View style={appStyles.col_container}>
                      <Text style={[appStyles.white, appStyles.font_md]}>Francisco D'Ankonia</Text>
                    </View>
                  </View>
                </ImageBackground>
                <View 
                  style={styles.profile_form} 
                >
                  <View style={styles.input_group}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='First Name' 
                    />
                  </View>
                  <View style={styles.input_group}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Last Name' 
                    />
                  </View>
                  <View style={styles.input_group}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Email' 
                    />
                  </View>
                  <View style={styles.input_group}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Phone' 
                    />
                  </View>
                  <View style={styles.input_group}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Password' 
                    />
                  </View>
                  <View style={styles.input_group}>
                    <Text style={styles.label}>Password Confirm</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder='Password Confirm' 
                    />
                  </View>
                  <View style={styles.button_group}>
                    <TouchableOpacity
                      style={styles.save_button} 

                    >
                      <Text style={[appStyles.white, appStyles.font_md]}>Save</Text>
                    </TouchableOpacity>
                  </View>
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

export default MyArtistsScreen;