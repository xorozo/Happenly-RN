import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, FlatList } from 'react-native';
import Colors from '../../../../constants/Colors';
import appStyles from '../../../../styles/app-style';
import styles from './style';

const SETTINGS = [
  {
    id: 1, key: 'TermsAndPolicies', title: 'Terms & Policies'
  },
  {
    id: 2, key: 'Help', title: 'Help'
  },
  {
    id: 3, key: 'AboutUs', title: 'About Us'
  },
]

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
                <FlatList 
                  data={SETTINGS} 
                  renderItem={({item}) => (
                    <View style={styles.settings_item}>
                      <TouchableOpacity
                        style={styles.item_link} 
                        onPress={() => this.props.navigation.navigate(item.key)}
                      >
                        <Text style={appStyles.font_lg}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  )} 
                  keyExtractor={item => item.id.toString()} 
                />
                <View 
                  style={styles.settings_container} 
                >
                  
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