import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import Colors from '../../../../constants/Colors';
import appStyles from '../../../../styles/app-style';
import styles from './style';

class SettingsScreen extends React.Component {
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
                <View style={styles.profile_container}>
                  <Image 
                    style={styles.avatar} 
                    source={require('../../../../../assets/images/avatars/avatar-f.png')}
                  />
                  <View style={styles.profile_info}>
                    <Text style={[styles.profile_text, appStyles.font_bold]}>Francisco D'Ankonia</Text>
                    <Text style={[styles.profile_text, appStyles.gray]}>happenly@gmail.com</Text>
                  </View>
                </View>
                <View 
                  style={styles.settings_container} 
                >
                  <View style={styles.settings_item}>
                    <TouchableOpacity
                      style={styles.item_link} 
                      onPress={() => this.props.navigation.navigate('TermsAndPolicies')}
                    >
                      <Text style={appStyles.font_lg}>Terms & Policies</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.settings_item}>
                    <TouchableOpacity
                      style={styles.item_link} 
                      onPress={() => this.props.navigation.navigate('Help')}
                    >
                      <Text style={appStyles.font_lg}>Help</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.settings_item}>
                    <TouchableOpacity
                      style={styles.item_link} 
                      onPress={() => this.props.navigation.navigate('AboutUs')}
                    >
                      <Text style={appStyles.font_lg}>About Us</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button_group}>
                    <TouchableOpacity
                      style={styles.signout_button} 
                    >
                      <Text style={[appStyles.white, appStyles.font_md]}>SIGN OUT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default SettingsScreen;